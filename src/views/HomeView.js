import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout, event }     from 'arva-js/layout/Decorators.js';
import {Button}             from 'arva-kit/buttons/Button.js';


export class HomeView extends View {

    constructor(options){
      super(options);
      this.options.userData.accounts.map( (account,index) => this.addRenderable( new valueBox({account: account}), index, layout.dockSpace(32), layout.dock.top(128) ) );
    }

    @layout.dock.top(64)
    @layout.stick.center()
    @layout.size(0.9,64)
    message = new Surface({
      content: `Hello ${this.options.userData.username}, how may we help you today?`,
      properties:{
        'color':'#1c73ba',
        'font-size':'16px',
        'text-align':'center',
        'line-height': '64px'
      }
    });

    
    
    // test = new valueBox({account: this.options.userData.accounts[1]});
    // todos = this.options.todos.map((todoItem)=>TodoElem.with(todoItem));
    
    // @layout.stick.center()
    // @layout.size(0.9,true)
    // @layout.dock.top(true)
    // secondPanel = new Panel();
    
    // @layout.stick.center()
    // @layout.size(0.9,true)
    // @layout.dock.top(true)
    // thirdPanel = new Panel();

}

class Panel extends View {

    @layout.dock.top(function() {return this.options.height})
    @layout.stick.center()
    @layout.size( 0.9, function() {return this.options.height} )
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

// @bindings.setup({
//     accountName: 'Unnamed Account'
// })
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
        'padding': '10px',
        'margin-top': '20px'
      }
    })

}

class Value extends View {

    @layout.dock.top(true)
    background = new Surface({
      content:`${this.options.cash} ${this.options.currency}`,
      properties:{
        'text-align': 'right',
        'font-size': '18px',
        'line-height': '20px',
        'color': '#1a1a1a',
        'padding': '10px',
        'margin-top': '20px'

      }
    })

}

class valueBox extends View {

  @layout.dock.top(0)
  mainPanel = new Panel({height:128});

  @layout.dock.top(0)
  @layout.stick.center()
  @layout.size( 0.9, 40 )
  titleTab = new Title({accountName: this.options.account.name});

  @layout.dock.top(0)
  @layout.stick.center()
  @layout.size( 0.9, 40 )
  @layout.translate(0,0,40)
  valueTab = new Value({cash: this.options.account.cash, currency: this.options.account.currency});


  @layout.align(0.05,0.31)
  @layout.size(0.3,88)
  depositButton = new Button({
    content:'lalala',
    properties:{
    },
    useBoxShadow: false,
    backgroundProperties: {
      borderRadius: '0px',
      backgroundColor: 'transparent'
    }

  });
  @layout.align(0.35,0.31)
  @layout.size(0.3,88)
  withdrawButton = new Button({
    content:'lalala',
    properties:{
    },
    useBoxShadow: false,
    backgroundProperties: {
      borderRadius: '0px',
      backgroundColor: 'transparent'
    }

  });
  @layout.align(0.65,0.31)
  @layout.size(0.3,88)
  transferButton = new Button({
    content:'lalala',
    properties:{
      content: 'test'
    },
    useBoxShadow: false,
    backgroundProperties: {
      borderRadius: '0px',
      content: 'ha ha ha',
      backgroundColor: 'transparent'
    }

  });

}