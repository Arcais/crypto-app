import Surface                    from 'famous/core/Surface.js';
import {View}                     from 'arva-js/core/View.js';
import {layout, event, bindings }           from 'arva-js/layout/Decorators.js';
import {WhiteTextButton}               from 'arva-kit/buttons/WhiteTextButton.js';
import {WhiteIconButton}           from 'arva-kit/buttons/WhiteIconButton.js';
import {NewIcon}                  from 'arva-kit/icons/NewIcon.js';
import {BadgeIcon}                 from 'arva-kit/icons/BadgeIcon.js';
import {SingleLineInputSurface}   from 'arva-kit/input/SingleLineInputSurface.js';
import { Injection }              from 'arva-js/utils/Injection.js';

import { DataBoundScrollView }    from 'arva-js/components/DataBoundScrollView.js';
import { PrioritisedArray }       from 'arva-js/data/PrioritisedArray.js';


@bindings.setup({
  accounts: [],
  userData: {}

})
@layout.dockPadding(32)
       // .nativeScrollable() //TODO fix this
export class HomeView extends View {

    @layout.fullSize()
           .translate(0, 0, -1)
    background = Surface.with({properties: {backgroundColor: 'rgb(230, 230, 230)'}});

    @layout.dock.top(64)
           .stick.center()
           .size(true,64)
    message = Surface.with({
      content: `Hello ${this.options.userData.username}, how may we help you today?`,
      properties:{
        'color':'#1c73ba',
        'font-size':'16px',
        'text-align':'center',
        'line-height': '64px'
      }
    });

    @layout.dock.fill()
    accounts = this.options.accounts.map( (account, index) => 

      layout.dockSpace(32)
             .dock.top(128)(
      ValueBox.with( {account: ( account || {} ), index: index } )
      )

    );



}


@bindings.setup({
  height: 0
})
class Panel extends View {

    @layout.dock.top(function() {return this.options.height})
           .stick.center()
    background = Surface.with({
    properties:{
      'background-color': 'white',
      'box-shadow': 'rgba(0, 0, 0, 0.12) 0px 0px 8px 0px',
      'border': '1px solid rgba(0, 0, 0, 0.1)',
      'text-align': 'center',
      'font-size': '16px',
      'color': '#3a3a3a',
      'padding': '10px'
    }
  })

}

@bindings.setup({
  accountName: ''
})
class Title extends View {

    @layout.dock.top(true)
    background = Surface.with({
      content:`${this.options.accountName}`,
      properties:{
        'border-bottom': '1px solid rgba(0, 0, 0, 0.1)',
        'text-align': 'left',
        'font-size': '18px',
        'line-height': '20px',
        'color': '#3a3a3a',
        'padding': '10px'
      }
    })

}

@bindings.setup({
  cash: 0,
  currency: ''
})
class Value extends View {

    @layout.dock.top(true)
    background = Surface.with({
      content:`${this.options.cash} ${this.options.currency}`,
      properties:{
        'border-bottom': '1px solid rgba(0, 0, 0, 0.1)',
        'text-align': 'right',
        'font-size': '18px',
        'line-height': '20px',
        'color': '#1a1a1a',
        'padding': '10px'

      }
    })

}

@bindings.setup({
  account: {},
  index: 0
})
class ValueBox extends View {

  //Box Background/Panel

  @layout.dock.top(0)
         .translate(0,0,40)
  mainPanel = Panel.with({height:128});


  //Title Panel

  @layout._stickTo('topLeft')
         .translate(0,0,80)
         .size( 0.5, 40 )
  titleTab = Title.with({accountName: this.options.account.name});

  @layout._stickTo('topRight')
         .translate(0,0,80)
         .size( 0.5, 40 )
  valueTab = Value.with({cash: this.options.account.cash, currency: this.options.account.currency});


  //Buttons Panel



  @event.on('mousedown',function(){
    this._eventOutput.emit('Deposit',this.options.index);
  })
  @layout.align(0,0.31)
         .translate(0,0,80)
         .size(1/3,88)
  depositButton = WhiteIconButton.with({
    icon: NewIcon,
    useBoxShadow: false,
    backgroundProperties: {
      borderRadius: '0px',
      backgroundColor: 'transparent'
    },
    iconProperties:{
      width:24,
      height:24
    }

  });

  @event.on('mousedown',function(){
    this._eventOutput.emit('Withdraw',this.options.index);
  })
  @layout.align(1/3,0.31)
         .translate(0,0,80)
         .size(1/3,88)
  withdrawButton = WhiteIconButton.with({
    icon: BadgeIcon,
    useBoxShadow: false,
    backgroundProperties: {
      borderRadius: '0px',
      backgroundColor: 'transparent'
    },
    iconProperties:{
      width:32,
      height:32
    }

  });

  @event.on('mousedown',function(){
    this._eventOutput.emit('Transfer',this.options.index);
  })
  @layout.align(2/3,0.31)
         .translate(0,0,80)
         .size(1/3,88)
  transferButton = WhiteTextButton.with({
    content: 'Transfer',
    useBoxShadow: false,
    bold: false,
    properties:{
      fontSize: '18px',
    },
    backgroundProperties: {
      borderRadius: '0px',
      backgroundColor: 'transparent',
      textAlign: 'center'
    }

  });

}