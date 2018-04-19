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
      })

      this.HomeView.on('Withdraw', (accountIndex) => {
        this.router.go('Home','Withdraw',{accountID: accountIndex});
      })

      this.HomeView.on('Transfer', (accountIndex) => {
        this.router.go('Home','Transfer',{accountID: accountIndex});
      })

    }
    
    return this.HomeView;

  }

  async Deposit (accountID){

    if (!this.DepositView[accountID]) {

      const userRef = db.ref(`/Users/0/accounts/${accountID}`);

      let accountDataPromise = await userRef.once('value');

      const accountData = accountDataPromise.val();

      this.DepositView[accountID] = new DepositView({account: accountData, selectedCurrency: accountData.currency, depositedMoney: accountData.cash});

      this.DepositView[accountID].on('Home', () => {
        this.router.go('Home','Index');
      });

    }

    return this.DepositView[accountID];

  }

  async Withdraw (accountID){

    if (!this.WithdrawView[accountID]) {

      const account = {
      "cash" : 3678.83,
      "currency" : "BTC",
      "name" : "Main Account",
      "uid" : 1
    };

      this.WithdrawView[accountID] = new WithdrawView({account, selectedCurrency: account.currency, withdrawnTotal: account.cash});

      this.WithdrawView[accountID].on('Home', () => {
        this.router.go('Home','Index');
      });

    }

    return this.WithdrawView[accountID];

  }

  async Transfer (accountID){

    if (!this.TransferView[accountID]) {

      const account = {
      "cash" : 3678.83,
      "currency" : "BTC",
      "name" : "Main Account",
      "uid" : 1
    };

      this.TransferView[accountID] = new TransferView({account});

      this.TransferView[accountID].on('Home', () => {
        this.router.go('Home','Index');
      });

    }

    return this.TransferView[accountID];

  }
  
}