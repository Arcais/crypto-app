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


    @layout.fullSize()
           .translate(0, 0, -1)
    background = Surface.with({properties: {backgroundColor: 'rgb(230, 230, 230)'}});


    @layout.dock.top(32)
           .stick.center()
           .size(0.99,48)
    transferInput = CoinInputRow.with();



    @layout.dockSpace(32)
           .dock.top(64)
    buttons = ButtonRow.with();




}


class CoinInputRow extends View {

    @layout.stick.left()
           .size( true ,64)
    transferField = SingleLineInputSurface.with({
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
      content: 'Send',
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