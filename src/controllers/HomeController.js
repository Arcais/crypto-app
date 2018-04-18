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



export class HomeController extends Controller {

  constructor(){
    super(...arguments);
    this.router = Injection.get(Router);

    this.DepositView = {};
    this.WithdrawView = {};
    this.TransferView = {};

  }

  async Index () {

    console.log(1);

    if (!this.HomeView) {

      const [userDataFromDB] = await Promise.all([
          Injection.get(User, 1).once('value')
      ]);
      const accounts = Injection.get(Accounts,null,null,{ path: `Users/${1}/accounts` });

      this.HomeView = new HomeView({userData: userDataFromDB, accounts});

      this.HomeView.on('Deposit', (accountIndex) => {
        this.router.go('Home','Deposit',{accountID: accountIndex});
      })

      this.HomeView.on('Withdraw', (accountIndex) => {
        console.log(accountIndex);
        this.router.go('Home','Withdraw',{accountID: accountIndex});
      })

      this.HomeView.on('Transfer', (accountIndex) => {
        console.log(accountIndex);
        this.router.go('Home','Transfer',{accountID: accountIndex});
      })

    }

    return this.HomeView;
  }

  async Deposit (accountID){

    if (!this.DepositView[accountID]) {

      const [account] = await Promise.all([
          Injection.get(Account, accountID, null, {path:`Users/${1}/accounts`}).once('value')
      ]);

      this.DepositView[accountID] = new DepositView({account, selectedCurrency: account.currency, depositedMoney: account.cash});

      this.DepositView[accountID].on('Home', () => {
        this.router.go('Home','Index');
      });

    }

    return this.DepositView[accountID];

  }

  async Withdraw (accountID){

    if (!this.WithdrawView[accountID]) {

      const [account] = await Promise.all([
          Injection.get(Account, accountID, null, {path:`Users/${1}/accounts`}).once('value')
      ]);

      this.WithdrawView[accountID] = new WithdrawView({account, selectedCurrency: account.currency, withdrawnTotal: account.cash});

      this.WithdrawView[accountID].on('Home', () => {
        this.router.go('Home','Index');
      });

    }

    return this.WithdrawView[accountID];

  }

  async Transfer (accountID){

    if (!this.TransferView[accountID]) {

      const [account] = await Promise.all([
          Injection.get(Account, accountID, null, {path:`Users/${1}/accounts`}).once('value')
      ]);

      this.TransferView[accountID] = new TransferView({account});

      this.TransferView[accountID].on('Home', () => {
        this.router.go('Home','Index');
      });

    }

    return this.TransferView[accountID];

  }
  
}