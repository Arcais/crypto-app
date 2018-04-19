import Surface                    from 'famous/core/Surface.js';
import {View}                     from 'arva-js/core/View.js';
import {layout, event, bindings }           from 'arva-js/layout/Decorators.js';
import {WhiteTextButton}               from 'arva-kit/buttons/WhiteTextButton.js';
import {Dropdown}                 from 'arva-kit/input/Dropdown.js';
import {SingleLineInputSurface}   from 'arva-kit/input/SingleLineInputSurface.js';

@bindings.setup({
  account: {}
})
@layout.dockPadding(32)
export class TransferView extends View {

    @layout.dock.top(32)
    @layout.stick.center()
    @layout.size(0.99,48)
    transferInput = new CoinInputRow();



    @layout.dockSpace(32)
    @layout.dock.top(64)
    buttons = new ButtonRow();




}


class CoinInputRow extends View {

    @layout.stick.left()
    @layout.size( true ,64)
    transferField = new SingleLineInputSurface({
      placeholder: 'Amount to transfer',
      activeColor: '#1c73ba',
      inactiveColor: '#3a3a3a',
      properties:{
        fontSize: '16px'
      }
    });

}



class ButtonRow extends View {

    @event.on('mousedown', function(){
      this._eventOutput.emit('Home');
    })
    @layout.stick.left()
    @layout.size(1/2,64)
    goBackButton = new WhiteTextButton({
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
    transferButton = new WhiteTextButton({
      content: 'Gimme emone',
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