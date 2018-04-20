import Surface                    from 'famous/core/Surface.js';
import {View}                     from 'arva-js/core/View.js';
import {layout, event, bindings }           from 'arva-js/layout/Decorators.js';
import {WhiteTextButton}               from 'arva-kit/buttons/WhiteTextButton.js';
import {Dropdown}                 from 'arva-kit/input/Dropdown.js';
import {SingleLineInputSurface}   from 'arva-kit/input/SingleLineInputSurface.js';

@bindings.setup({

  account: {},
  selectedCurrency: '',
  withdrawnTotal: 0,
  withdrawnCash: 0,
  exchangeRate: 1,
  httpGetChangeRate: function(fromCurrency, toCurrency, callback){

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        callback(xmlHttp.responseText);
      }
    }

    xmlHttp.open("GET", `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}`, true); // true for asynchronous 
    xmlHttp.send(null);

  }

})
@layout.dockPadding(32)
export class WithdrawView extends View {

    @layout.fullSize()
           .translate(0, 0, -1)
    background = Surface.with({properties: {backgroundColor: 'rgb(230, 230, 230)'}});


    @layout.dock.top(64)
           .stick.center()
           .size(true,64)
    title = Surface.with({
      content: `Withdraw Crypto`,
      properties:{
        'font-size':'22px',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @event
    .on('valueChange', function(newCash){

        if(Number(newCash) > 0){

          this.options.withdrawnCash = Number(newCash);

          if(this.options.account.currency !== this.options.selectedCurrency){

            let self = this; //I KNOW scope keeping is not safe but it's just a demo app and it doesn't need workarounds

            this.options.httpGetChangeRate( this.options.selectedCurrency, this.options.account.currency, function(res){
              
              let ratesModifier = JSON.parse(res);

              self.options.exchangeRate = ratesModifier[self.options.account.currency];

              let tempWithdrawnTotal = self.options.account.cash - (self.options.withdrawnCash*ratesModifier[self.options.account.currency]);

              if(tempWithdrawnTotal>0){

                self.options.withdrawnTotal = tempWithdrawnTotal;

              }
              else{

                self.options.withdrawnCash = self.options.account.cash/ratesModifier[self.options.account.currency];
                self.options.withdrawnTotal = 0;

              }

            });
          }
          else{

            let tempWithdrawnTotal = this.options.account.cash - this.options.withdrawnCash;
            if(tempWithdrawnTotal>0){
              this.options.withdrawnTotal = tempWithdrawnTotal;
            }
            else{

              this.options.withdrawnCash = this.options.account.cash;
              // this.options.withdrawnCash = 
              this.options.withdrawnTotal = 0;

            }
          }
        }

    })
    .on('itemChosen', function(newCurrency){

        let currentCurrency = this.options.account.currency;

        let self = this; //I KNOW scope keeping is not safe but it's just a demo app and it doesn't need workarounds

        this.options.selectedCurrency=newCurrency;

        this.options.httpGetChangeRate(newCurrency,currentCurrency,function(res){

          let ratesModifier = JSON.parse(res);

          self.options.exchangeRate = ratesModifier[currentCurrency];

          let tempWithdrawnTotal = self.options.account.cash - ( ( self.options.withdrawnCash || 0 ) * ratesModifier[currentCurrency] );

          if(tempWithdrawnTotal>0){

            self.options.withdrawnTotal = tempWithdrawnTotal;

          }
          else{

            self.options.withdrawnCash = self.options.account.cash/ratesModifier[currentCurrency];
            self.options.withdrawnTotal = 0;

          }

        });

    })
    @layout.dock.top(104)
           .stick.center()
           .size(0.99,48)
    withdrawInput = CoinInputRow.with({accountCurrency: this.options.account.currency});

    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    currentBalance = Surface.with({
      content: `Current balance: ${this.options.account.cash.toFixed(2)} ${this.options.account.currency}`,
      properties:{
        'font-size':'18px',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dock.top(48)
           .stick.center()
           .size(true,48)
    transactionInfo = this.options.exchangeRate!=1 ? Surface.with({
      content: `Currently exchanging ${this.options.withdrawnCash.toFixed(2)} ${this.options.selectedCurrency} at a rate of ${this.options.exchangeRate.toFixed(4)} per ${this.options.account.currency}`,
      properties:{
        'font-size':'16px',
        'text-align':'center',
        'line-height': '48px'
      }
    }) : '';

    @layout.dock.top(32)
           .stick.center()
           .size(true,32)
    newBalance = Surface.with({
      content: `New balance: ${this.options.withdrawnTotal.toFixed(2)} ${this.options.account.currency}`,
      properties:{
        'font-size':'18px',
        'color': '#1c73ba',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dockSpace(32)
           .dock.top(64)
    buttons = ButtonRow.with();




}

@bindings.setup({
  accountCurrency: ''
})
class CoinInputRow extends View {

    @layout.stick.left()
           .size( (5/6) - (1/100) ,64)
    withdrawField = SingleLineInputSurface.with({
      placeholder: 'Amount to withdraw',
      activeColor: '#1c73ba',
      inactiveColor: '#3a3a3a',
      properties:{
        fontSize: '16px'
      }
    });

    @layout.stick.right()
           .size(1/6,64)
    coinDropdown = Dropdown.with({
      items:[{
        text: 'BTC',
        data: 'BTC',
        selected: (this.options.accountCurrency==='BTC')
      },{
        text: 'ETH',
        data: 'ETH',
        selected: (this.options.accountCurrency==='ETH')
      },{
        text: 'LTC',
        data: 'LTC',
        selected: (this.options.accountCurrency==='LTC')
      },{
        text: 'XRP',
        data: 'XRP',
        selected: (this.options.accountCurrency==='XRP')
      },{
        text: 'BCH',
        data: 'BCH',
        selected: (this.options.accountCurrency==='BCH')
      }],
      fakeWithNative: true

    });

}



class ButtonRow extends View {

    @event.on('mousedown', function(){
      this._eventOutput.emit('GoBackFromWithdraw');
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
      this._eventOutput.emit('DoWithdraw');
    })
    @layout.stick.right()
           .size(1/2,64)
    transferButton = WhiteTextButton.with({
      content: 'Withdraw',
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