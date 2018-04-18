import Surface                    from 'famous/core/Surface.js';
import {View}                     from 'arva-js/core/View.js';
import {layout, event }           from 'arva-js/layout/Decorators.js';
import {TextButton}               from 'arva-kit/buttons/TextButton.js';
import {IconTextButton}           from 'arva-kit/buttons/IconTextButton.js';
import {NewIcon}                  from 'arva-kit/icons/NewIcon.js';
import {SendIcon}                 from 'arva-kit/icons/SendIcon.js';
import {SingleLineInputSurface}   from 'arva-kit/input/SingleLineInputSurface.js';
import { Injection }              from 'arva-js/utils/Injection.js';

import { DataBoundScrollView }    from 'arva-js/components/DataBoundScrollView.js';
import { PrioritisedArray }       from 'arva-js/data/PrioritisedArray.js';


@layout.dockPadding(32)
export class HomeView extends View {

    constructor(options){
      super(options);
      // this.options.userData.accounts.map( (account,index) => this.addRenderable( new valueBox({account: account,index: index}), index, layout.dockSpace(32), layout.dock.top(128) ) );
    }

    @layout.dock.top(64)
    @layout.stick.center()
    @layout.size(true,64)
    message = new Surface({
      content: `Hello ${this.options.userData.username}, how may we help you today?`,
      properties:{
        'color':'#1c73ba',
        'font-size':'16px',
        'text-align':'center',
        'line-height': '64px'
      }
    });

    @layout.dock.fill()
    accounts = new DataBoundScrollView({
      layoutOptions: {
        spacing: 64
      },
      itemTemplate: (account) => {
        return new ValueBox({account: account});
      },
      dataStore: this.options.accounts
    });



}

class Panel extends View {

    @layout.dock.top(function() {return this.options.height})
    @layout.stick.center()
    background = new Surface({
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

class Title extends View {

    @layout.dock.top(true)
    background = new Surface({
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

class Value extends View {

    @layout.dock.top(true)
    background = new Surface({
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

class ValueBox extends View {

  //Box Background/Panel

  @layout.dock.top(0)
  @layout.translate(0,0,40)
  mainPanel = new Panel({height:128});


  //Title Panel

  @layout._stickTo('topLeft')
  @layout.translate(0,0,80)
  @layout.size( 0.5, 40 )
  titleTab = new Title({accountName: this.options.account.name});

  @layout._stickTo('topRight')
  @layout.translate(0,0,80)
  @layout.size( 0.5, 40 )
  valueTab = new Value({cash: this.options.account.cash, currency: this.options.account.currency});


  //Buttons Panel



  @event.on('mousedown',function(){
    this._eventOutput.emit('Deposit',this.options.account.uid);
  })
  @layout.align(0,0.45)
  @layout.translate(0,0,80)
  @layout.size(1/3,88)
  depositButton = new IconTextButton({
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
    this._eventOutput.emit('Withdraw',this.options.account.uid);
  })
  @layout.align(1/3,0.45)
  @layout.translate(0,0,80)
  @layout.size(1/3,88)
  withdrawButton = new IconTextButton({
    icon: SendIcon,
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
    this._eventOutput.emit('Transfer',this.options.account.uid);
  })
  @layout.align(2/3,0.45)
  @layout.translate(0,0,80)
  @layout.size(1/3,88)
  transferButton = new TextButton({
    content: 'Transfer',
    useBoxShadow: false,
    properties:{
      fontSize: '16px'
    },
    backgroundProperties: {
      borderRadius: '0px',
      backgroundColor: 'transparent',
      textAlign: 'center'
    }

  });

}