import firebase                     from 'firebase';

//Dependencies
import { Controller }                 from 'arva-js/core/Controller.js';
import { Router }                     from 'arva-js/core/Router.js';
import { Injection }                  from 'arva-js/utils/Injection.js';

//Views
import { HomeView }                   from '../views/HomeView.js'
import { DepositView }                from '../views/DepositView.js'
import { WithdrawView }               from '../views/WithdrawView.js'
import { TransferView }               from '../views/TransferView.js'
import { TransactionFinishedView }    from '../views/TransactionFinished.js'

//Models
import { User, Users }                      from '../models/UserModel.js'
import { Account, Accounts }                      from '../models/AccountModel.js'


firebase.initializeApp({
  apiKey: 'AIzaSyAa1hdy3ZTTQ7_uRlGNRKb4tWR1Fk_kBnY',
  authDomain: 'crypto-arc.firebaseapp.com',
  databaseURL: 'https://crypto-arc.firebaseio.com/',
  storageBucket: 'gs://crypto-arc.appspot.com/'
});

let db = firebase.database();


export class HomeController extends Controller {

  constructor(){
    super(...arguments);
    this.router = Injection.get(Router);

    this.DepositView = {};
    this.WithdrawView = {};
    this.TransferView = {};

  }

  async Index () {

    if (!this.HomeView) {

      const userRef = db.ref('/Users/0');

      let usersList = await userRef.once('value');

      const userDataFromDB = usersList.val();

      this.HomeView = new HomeView({userData: userDataFromDB, accounts: userDataFromDB.accounts});

      this.HomeView.on('Deposit', (accountIndex) => {
        this.router.go('Home','Deposit',{accountID: accountIndex});
        this.HomeView = undefined;
      })

      this.HomeView.on('Withdraw', (accountIndex) => {
        this.router.go('Home','Withdraw',{accountID: accountIndex});
        this.HomeView = undefined;
      })

      this.HomeView.on('Transfer', (accountIndex) => {
        this.router.go('Home','Transfer',{accountID: accountIndex});
        this.HomeView = undefined;
      })

    }
    
    return this.HomeView;

  }

  async Deposit (accountID){

    if (!this.DepositView[accountID]) {

      const accountRef = db.ref(`/Users/0/accounts/${accountID}`);

      let accountDataPromise = await accountRef.once('value');

      const accountData = accountDataPromise.val();

      this.DepositView[accountID] = new DepositView({account: accountData, selectedCurrency: accountData.currency, depositedMoney: accountData.cash});

      this.DepositView[accountID].on('GoBackFromDeposit', () => {
        this.router.go('Home','Index');
        this.DepositView[accountID] = undefined;
      });

      this.DepositView[accountID].on('DoDeposit', () => {

        let self = this;
        
        accountRef.update({'cash': this.DepositView[accountID].options.depositedMoney }, function(err){
          
          if(err){
            console.log(err);
          }
          else{
            self.router.go('Home','TransactionFinished');
            self.DepositView[accountID] = undefined;

          }

        })
      
      });

    }

    return this.DepositView[accountID];

  }

  async Withdraw (accountID){

    if (!this.WithdrawView[accountID]) {

      const accountRef = db.ref(`/Users/0/accounts/${accountID}`);

      let accountDataPromise = await accountRef.once('value');

      const accountData = accountDataPromise.val();

      this.WithdrawView[accountID] = new WithdrawView({account: accountData, selectedCurrency: accountData.currency, withdrawnTotal: accountData.cash});

      this.WithdrawView[accountID].on('GoBackFromWithdraw', () => {
        this.router.go('Home','Index');
        this.WithdrawView[accountID] = undefined;
      });
      
      this.WithdrawView[accountID].on('DoWithdraw', () => {

        let self = this;

        accountRef.update({'cash': this.WithdrawView[accountID].options.withdrawnTotal }, function(err){

          if(err){
            console.log(err);
          }
          else{
            self.router.go('Home','TransactionFinished');
            self.WithdrawView[accountID] = undefined;
          }

        });


      });

    }

    return this.WithdrawView[accountID];

  }

  async Transfer (accountID){

    if (!this.TransferView[accountID]) {

      const accountsRef = db.ref(`/Users/0/accounts`);

      let accountsDataPromise = await accountsRef.once('value');

      const accountsData = accountsDataPromise.val();

      this.TransferView[accountID] = new TransferView({
        accounts: accountsData,
        currentAccountID: accountID,
        selectedAccountID: accountID!=0 ? 0 : 1,
        transferTotalMainAccount: accountsData[accountID].cash,
        transferTotalSecondAccount: accountsData[accountID!=0 ? 0 : 1].cash
      });

      this.TransferView[accountID].on('GoBackFromTransfer', () => {
        this.router.go('Home','Index');
        this.TransferView[accountID] = undefined;
      });
      
      this.TransferView[accountID].on('DoTransfer', () => {

        let self = this;
        let transferDefer = {};

        transferDefer['/'+accountID+'/cash'] = this.TransferView[accountID].options.transferTotalMainAccount;
        transferDefer['/'+this.TransferView[accountID].options.selectedAccountID+'/cash'] = this.TransferView[accountID].options.transferTotalSecondAccount;

        accountsRef.update(transferDefer, function(err){

          if(err){
            console.log(err);
          }
          else{
            self.router.go('Home','TransactionFinished');
            self.TransferView[accountID] = undefined;
          }

        });

      });

    }

    return this.TransferView[accountID];

  }

  async TransactionFinished (){

    if (!this.TransactionFinishedView) {

      this.TransactionFinishedView = new TransactionFinishedView();

      let self = this;

      setTimeout(function(){  
        self.router.go('Home','Index');
        self.TransactionFinishedView = undefined;
      }, 5000);

    }

    return this.TransactionFinishedView;

  }
  
}