import Surface                    from 'famous/core/Surface.js';
import {View}                     from 'arva-js/core/View.js';
import {layout, event, bindings }           from 'arva-js/layout/Decorators.js';
import {WhiteTextButton}               from 'arva-kit/buttons/WhiteTextButton.js';
import {Dropdown}                 from 'arva-kit/input/Dropdown.js';
import {SingleLineInputSurface}   from 'arva-kit/input/SingleLineInputSurface.js';

@bindings.setup({

  accounts: [],
  currentAccountID: 0,
  selectedAccountID: 0,
  transferTotalMainAccount: 0,
  transferTotalSecondAccount: 0,
  transferCash: 0,
  exchangeRate: 1,
  httpGetChangeRate: function(fromCurrency, toCurrency, callback){

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        callback(xmlHttp.responseText);
      }
    }

    xmlHttp.open("GET", `https://min-api.cryptocompare.com/data/price?fsym=${toCurrency}&tsyms=${fromCurrency}`, true); // true for asynchronous 
    xmlHttp.send(null);

  }

})
@layout.dockPadding(32)
export class TransferView extends View {

    constructor(options){

      super(options);

      let self = this;

      this.options.httpGetChangeRate(this.options.accounts[this.options.selectedAccountID].currency,this.options.accounts[this.options.currentAccountID].currency,function(res){

        let ratesModifier = JSON.parse(res);

        self.options.exchangeRate = ratesModifier[self.options.accounts[self.options.selectedAccountID].currency];

      });

    }

    @layout.fullSize()
           .translate(0, 0, -1)
    background = Surface.with({properties: {backgroundColor: 'rgb(230, 230, 230)'}});


    @layout.dock.top(64)
           .stick.center()
           .size(true,64)
    title = Surface.with({
      content: `Transfer Crypto`,
      properties:{
        'font-size':'22px',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    currentAccountText = Surface.with({
      content: 'Currently transferring from account:',
      properties:{
        'font-size':'18px',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    currentAccountInfo = Surface.with({
      content: `${this.options.currentAccountID}|${this.options.accounts[this.options.currentAccountID].name} - ${this.options.accounts[this.options.currentAccountID].cash} ${this.options.accounts[this.options.currentAccountID].currency}`,
      properties:{
        'font-size':'18px',
        'text-align':'center',
        'line-height': '32px'
      }
    });


    @event.on('valueChange', function(newCash){

        if(Number(newCash) > 0){

          this.options.transferCash = Number(newCash);

          let tempTransferTotalMain = this.options.accounts[this.options.currentAccountID].cash - this.options.transferCash;

          if(tempTransferTotalMain>0){

            this.options.transferTotalMainAccount = tempTransferTotalMain;

            this.options.transferTotalSecondAccount = this.options.accounts[this.options.selectedAccountID].cash + (this.options.transferCash*this.options.exchangeRate);

          }
          else{

            this.options.transferCash = this.options.accounts[this.options.currentAccountID].cash;

            this.options.transferTotalMainAccount = 0;

            this.options.transferTotalSecondAccount = this.options.accounts[this.options.selectedAccountID].cash + (this.options.transferCash*this.options.exchangeRate);

          }

        }

    })
    @layout.dock.top(128)
           .stick.center()
           .size(0.99,48)
    transferInput = CoinInputRow.with({currentCurrency: this.options.accounts[this.options.currentAccountID].currency});



    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    currentBalance = Surface.with({
      content: `Current balance on ${this.options.accounts[this.options.currentAccountID].name}: ${this.options.accounts[this.options.currentAccountID].cash.toFixed(2)} ${this.options.accounts[this.options.currentAccountID].currency}`,
      properties:{
        'font-size':'18px',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    newBalance = Surface.with({
      content: `New balance on ${this.options.accounts[this.options.currentAccountID].name}: ${this.options.transferTotalMainAccount.toFixed(2)} ${this.options.accounts[this.options.currentAccountID].currency}`,
      properties:{
        'font-size':'18px',
        'color': '#1c73ba',
        'text-align':'center',
        'line-height': '32px'
      }
    });


    @layout.dock.top(64)
           .stick.center()
           .size(true,64)
    dividerText = Surface.with({
      content: 'Transferring to:',
      properties:{
        'font-size':'20px',
        'text-align':'center',
        'line-height': '86px'
      }
    });


    @event.on('itemChosen', function(selectedID){


        this.options.selectedAccountID = selectedID;

        // let currentCurrency = this.options.accounts[this.options.currentAccountID].currency;

        let self = this; //I KNOW scope keeping is not safe but it's just a demo app and it doesn't need workarounds

        // this.options.selectedCurrency=newCurrency;

        this.options.httpGetChangeRate(this.options.accounts[selectedID].currency,this.options.accounts[this.options.currentAccountID].currency,function(res){

          let ratesModifier = JSON.parse(res);

          self.options.exchangeRate = ratesModifier[self.options.accounts[self.options.selectedAccountID].currency];

          let tempTransferTotalMain = self.options.accounts[self.options.currentAccountID].cash - self.options.transferCash;

        //   let tempWithdrawnTotal = self.options.accounts[self.options.currentAccountID].cash - ( ( self.options.withdrawnCash || 0 ) * ratesModifier[currentCurrency] );


          if(tempTransferTotalMain>0){

            self.options.transferTotalMainAccount = tempTransferTotalMain;

            self.options.transferTotalSecondAccount = self.options.accounts[selectedID].cash + (self.options.transferCash*self.options.exchangeRate);

          }
          else{

            self.options.transferCash = self.options.accounts[self.options.currentAccountID].cash;

            self.options.transferTotalSecondAccount = self.options.accounts[selectedID].cash + (self.options.transferCash*self.options.exchangeRate);

          }

        });

    })
    @layout.dock.top(128)
           .stick.center()
           .size(0.99,48)
    accountSelect = AccountRow.with({accounts: this.options.accounts, currentAccountID: Number(this.options.currentAccountID)});


    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    currentBalanceSecondAccount = Surface.with({
      content: `Current balance on ${this.options.accounts[this.options.selectedAccountID].name}: ${this.options.accounts[this.options.selectedAccountID].cash.toFixed(2)} ${this.options.accounts[this.options.selectedAccountID].currency}`,
      properties:{
        'font-size':'18px',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    newBalanceSecondAccount = Surface.with({
      content: `New balance on ${this.options.accounts[this.options.selectedAccountID].name}: ${this.options.transferTotalSecondAccount.toFixed(2)} ${this.options.accounts[this.options.selectedAccountID].currency}`,
      properties:{
        'font-size':'18px',
        'color': '#1c73ba',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dock.top(48)
           .stick.center()
           .size(true,48)
    transactionExchangeRate = this.options.exchangeRate!=1 ? Surface.with({
      content: `Currently exchanging ${this.options.transferCash.toFixed(2)} ${this.options.accounts[this.options.currentAccountID].currency} at a rate of ${this.options.exchangeRate.toFixed(4)} per ${this.options.accounts[this.options.selectedAccountID].currency}`,
      properties:{
        'font-size':'16px',
        'text-align':'center',
        'line-height': '48px'
      }
    }) : '';

    @layout.dockSpace(32)
           .dock.top(64)
    buttons = ButtonRow.with();




}

@bindings.setup({
  currentCurrency: ''
})
class CoinInputRow extends View {

    @layout.stick.left()
           .size( 5/6 , 64 )
    transferField = SingleLineInputSurface.with({
      placeholder: 'Amount to transfer',
      activeColor: '#1c73ba',
      inactiveColor: '#3a3a3a',
      properties:{
        fontSize: '16px'
      }
    });

    @layout.stick.right()
           .size( 1/6 , 64 )
    currencyDisplay = Surface.with({
      content: `${this.options.currentCurrency}`,
      properties:{
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '64px'
      }
    });

}

@bindings.setup({
  accounts: [],
  currentAccountID: 0
})
class AccountRow extends View {

    @layout.stick.center()
           .size( true , 64 )
    transferField = Dropdown.with({
      items: this.options.accounts.map( (account,index) => {
        return { text: index+'|'+account.name+' - '+account.cash+' '+account.currency, data: index , selected: index===this.options.selectedAccountID }
      } )[0].filter( (account,index) => index!==this.options.currentAccountID ),
      fakeWithNative: true,
      properties:{
        textalign: 'center'
      }
    });

}



class ButtonRow extends View {

    @event.on('mousedown', function(){
      this._eventOutput.emit('GoBackFromTransfer');
    })
    @layout.stick.left()
           .size(1/2,64)
    goBackButton = WhiteTextButton.with({
      content: 'Go back',
      useBoxShadow: false,
      bold: false,
      properties:{
        fontSize: '18px'
      },
      backgroundProperties: {
        borderRadius: '4px 0px 0px 4px',
        backgroundColor: 'white',
        textAlign: 'center',
        boxShadow: 'rgba(50, 50, 50, 0.08) 0px 2px 4px 0px'
      }

    });

    @event.on('mousedown', function(){
      this._eventOutput.emit('DoTransfer');
    })
    @layout.stick.right()
           .size(1/2,64)
    transferButton = WhiteTextButton.with({
      content: 'Transfer',
      useBoxShadow: false,
      bold: false,
      properties:{
        fontSize: '18px'
      },
      backgroundProperties: {
        borderRadius: '0px 4px 4px 0px',
        backgroundColor: 'white',
        textAlign: 'center',
        borderLeft: '1px solid rgba(50, 50, 50, 0.08)',
        boxShadow: 'rgba(50, 50, 50, 0.08) 0px 2px 4px 0px'
      }

    });

}