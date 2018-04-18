import Surface                    from 'famous/core/Surface.js';
import {View}                     from 'arva-js/core/View.js';
import {layout, event }           from 'arva-js/layout/Decorators.js';
import {TextButton}               from 'arva-kit/buttons/TextButton.js';
import {Dropdown}                 from 'arva-kit/input/Dropdown.js';
import {SingleLineInputSurface}   from 'arva-kit/input/SingleLineInputSurface.js';


@layout.dockPadding(32)
export class DepositView extends View {

    constructor(options){

      super(options);

      let httpGetChangeRate = function(fromCurrency, toCurrency, callback){

          let xmlHttp = new XMLHttpRequest();

          xmlHttp.onreadystatechange = function() { 
              if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                  callback(xmlHttp.responseText);
          }

          xmlHttp.open("GET", `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}`, true); // true for asynchronous 
          xmlHttp.send(null);

      }

      this._eventOutput.on('value',(newCash)=>{
        this.options.addedCash = Number(newCash);
        console.log(this.options.addedCash);
        if(this.options.addedCash > 0){
        console.log(this.options.addedCash);
        console.log(this.options.account.currency);
        console.log(this.options.selectedCurrency);
        console.log(this.options.account.currency === this.options.selectedCurrency);

          if(this.options.account.currency !== this.options.selectedCurrency){
        console.log(this.options.addedCash);

            let self = this; //I KNOW scope keeping is not safe but it's just a demo app and it doesn't need workarounds

            httpGetChangeRate( this.options.selectedCurrency, this.options.account.currency, function(res){
              let ratesModifier = JSON.parse(res);
              console.log(self.options.cash);

              console.log(self.options.addedCash);

              self.options.depositedMoney = self.options.account.cash + (self.options.addedCash*ratesModifier[self.options.account.currency]);
              console.log(self.options.depositedMoney);

            });
          }
          else{
            this.options.depositedMoney = this.options.account.cash + this.options.addedCash;
              console.log(this.options.depositedMoney);
          }
        }
      });

      this._eventOutput.on('itemChosen',(newCurrency)=>{

        let currentCurrency = this.options.account.currency;

        let self = this; //I KNOW scope keeping is not safe but it's just a demo app and it doesn't need workarounds

        this.options.selectedCurrency=newCurrency;

        httpGetChangeRate(newCurrency,currentCurrency,function(res){
          let ratesModifier = JSON.parse(res);
          console.log(self.options.cash);

          console.log(self.options.addedCash);

          self.options.depositedMoney = self.options.account.cash + ( ( self.options.addedCash || 0 ) * ratesModifier[currentCurrency] );
          console.log(self.options.depositedMoney);

        });

      });

    }

    @layout.dock.top(64)
    @layout.stick.center()
    @layout.size(true,64)
    title = new Surface({
      content: `Deposit Crypto`,
      properties:{
        'font-size':'22px',
        'text-align':'center',
        'line-height': '32px'
      }
    });

    @layout.dock.top(104)
    @layout.stick.center()
    @layout.size(0.99,48)
    depositInput = new CoinInputRow();

    @layout.dock.top(32)
    @layout.stick.center()
    @layout.size(true,32)
    currentBalance = new Surface({
      content: `Current balance: ${this.options.account.cash} ${this.options.account.currency}`,
      properties:{
        'font-size':'18px',
        'text-align':'left',
        'line-height': '32px'
      }
    });

    @layout.dock.top(32)
    @layout.stick.center()
    @layout.size(true,32)
    newBalance = new Surface({
      content: `New balance: ${this.options.depositedMoney} ${this.options.selectedCurrency}`,
      properties:{
        'font-size':'18px',
        'color': '#1c73ba',
        'text-align':'left',
        'line-height': '32px'
      }
    });

    @layout.dockSpace(32)
    @layout.dock.top(64)
    buttons = new ButtonRow();




}


class CoinInputRow extends View {

    @layout.stick.left()
    @layout.size( (5/6) - (1/100) ,64)
    depositField = new SingleLineInputSurface({
      placeholder: 'Amount to deposit',
      activeColor: '#1c73ba',
      inactiveColor: '#3a3a3a',
      properties:{
        fontSize: '16px'
      }
    });

    @layout.stick.right()
    @layout.size(1/6,64)
    coinDropdown = new Dropdown({
      items:[{
        text: 'BTC',
        data: 'BTC',
        selected: true //(this.options.selectedCurrency==='BTC')
      },{
        text: 'ETH',
        data: 'ETH',
        selected: false //(this.options.selectedCurrency==='ETH')
      },{
        text: 'LTC',
        data: 'LTC',
        selected: false //(this.options.selectedCurrency==='LTC')
      },{
        text: 'XRP',
        data: 'XRP',
        selected: false //(this.options.selectedCurrency==='XRP')
      },{
        text: 'BCH',
        data: 'BCH',
        selected: false //(this.options.selectedCurrency==='BCH')
      }],
      fakeWithNative: true

    });

}



class ButtonRow extends View {

    @event.on('mousedown', function(){
      this._eventOutput.emit('Home');
    })
    @layout.stick.left()
    @layout.size(1/2,64)
    goBackButton = new TextButton({
      content: 'Go back',
      useBoxShadow: false,
      properties:{
        fontSize: '16px'
      },
      backgroundProperties: {
        borderRadius: '4px 0px 0px 4px',
        backgroundColor: 'white',
        textAlign: 'center',
        boxShadow: 'rgba(50, 50, 50, 0.08) 0px 2px 4px 0px'
      }

    });

    @event.on('mousedown', function(){
      this._eventOutput.emit('Home');
    })
    @layout.stick.right()
    @layout.size(1/2,64)
    transferButton = new TextButton({
      content: 'Protecc my bitcoin',
      useBoxShadow: false,
      properties:{
        fontSize: '16px'
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