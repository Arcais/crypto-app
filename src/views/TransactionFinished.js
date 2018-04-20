import Surface                    from 'famous/core/Surface.js';
import {View}                     from 'arva-js/core/View.js';
import {layout, event, bindings } from 'arva-js/layout/Decorators.js';

@bindings.setup({
  //background image https://thumbs.gfycat.com/ShyCautiousAfricanpiedkingfisher-max-1mb.gif something with
  //Your transaction was recorded and completed. Thank you for using our service!
})
@layout.dockPadding(32)
export class TransactionFinishedView extends View {

    @layout.fullSize()
           .translate(0, 0, -1)
    background = Surface.with({properties: {backgroundColor: 'rgb(230, 230, 230)'}});


    @layout.size(0.9,0.75)
           .dock.top()
           .stick.center()
           .translate(0, 0, 40)
    backgroundTick = Surface.with({
      properties:{
        'background-image': 'url(https:\/\/thumbs.gfycat.com\/ShyCautiousAfricanpiedkingfisher-max-1mb.gif)',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
      }
    });

    @layout.fullSize()
           .translate(0, 0, 80)
    finsihedTextTop = Surface.with({
      content: 'Your transaction was recorded and completed.',
      properties:{
        'font-size':'22px',
        'color': '#49cc85',
        'text-align':'center',
        'line-height': '108vh'
      }
    });

    @layout.fullSize()
           .translate(0, 0, 120)
    finsihedTextBottom = Surface.with({
      content: 'Thank you for using our service!',
      properties:{
        'font-size':'22px',
        'color': '#49cc85',
        'text-align':'center',
        'line-height': '116vh'
      }
    });

    // @layout.fullSize()
    //        .translate(0, 0, 40)
    // background = Surface.with({
    //   properties: {

    //   }
    // });

}
