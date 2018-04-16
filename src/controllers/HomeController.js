//Dependencies
import { Controller }                 from 'arva-js/core/Controller.js';
import { Injection }                  from 'arva-js/utils/Injection.js';

//Views
import { HomeView }                   from '../views/HomeView.js'

//Models
import { User, Users }                      from '../models/UserModel.js'



export class HomeController extends Controller {

  async Index () {

    const [userDataFromDB] = await Promise.all([
        Injection.get(User, 1).once('value')
    ]);

    if (!this.HomeView) {
      this.HomeView = new HomeView({userData: userDataFromDB})
    }
    return this.HomeView
  }
  
}