import 'babel-polyfill';
import 'arva-js/utils/hotfixes/IESupport.js';

import firebase                     from 'firebase';

import {FirebaseDataSource}         from 'arva-js/data/datasources/FirebaseDataSource.js';
import {App as ArvaApp}             from 'arva-js/core/App.js';
import {Router}                     from 'arva-js/core/Router.js';
import {provide}                    from 'arva-js/utils/di/Decorators.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {DataSource}                 from 'arva-js/data/DataSource.js';
import {dialogManager}              from 'arva-js/utils/DialogManager.js';

import {setColors}                  from 'arva-kit/defaults/DefaultColors.js';
import {useTypefaces}               from 'arva-kit/defaults/DefaultTypefaces.js';
import {NavigationDrawer}           from 'arva-kit/menus/navigationDrawer/NavigationDrawer.js';
import {ImageSideMenuView}          from 'arva-kit/menus/navigationDrawer/sideMenus/ImageSideMenuView.js';

import {AccountIcon}                from 'arva-kit/icons/AccountIcon.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import './famous.css';
import './fonts.css';

/* Here we import all controllers we want to use in the app */
import {HomeController}             from './controllers/HomeController.js';

export class App extends ArvaApp {

    /* References to Dependency Injection created App and Controller instances, so they are not garbage collected. */
    static references = {};

    /* The controllers that will be used in the app. */
    static controllers = [HomeController];


    /* Define which DataSource to use */
    // static defaultDataSource() {
        /* Firebase initialization */
        // return new FirebaseDataSource('/', {});
    // }


    /**
     *  Called before the App is constructed and before the basic components (Router, Famous Context, Controllers,
     *  DataSource) have loaded.
     */
    static initialize() {
        /* Change initial route, view animation or something needed before we start */
        // provide(DataSource)(App.defaultDataSource);



        useTypefaces({TextBody: {fontSize: '16px'}});

        setColors({
            PrimaryUIColor: '#1c73ba',
            SecondaryUIColor: '#fab03f'
        });
        this.start();
    }

    /**
     * Called after the Router, Famous Context, and Controllers have been instantiated,
     * but before any Controller method is executed by the Router.
     */
    static loaded() {
        /* Instantiate things you need before the router is executed here. For example:
         *
         * this.references.menu = Injection.get(Menu); */

        /* Set default controller and method */
        Injection.get(Router).setDefault('Home', 'Index');

        /* Set default controller specifications */
        Injection.get(Router).setControllerSpecs({
            // HomeController:{
            //     methods: {
            //         next: {
            //             transition: { duration: 400, curve: Easing.outBack },
            //             animation: AnimationController.Animation.Slide.Left
            //         },
            //         previous: {
            //             transition: { duration: 400, curve: Easing.outBack },
            //             animation: AnimationController.Animation.Slide.Right
            //         }
            //     }
            // }
        });
        
        let menu = Injection.get(NavigationDrawer, {
            topMenuOptions: { defaultTitle: 'Arva Application' },
            sideMenu: {
                viewClass: ImageSideMenuView,
                image: 'https://i.imgur.com/0XWJ2gP.png',
                menuItems: [{
                    icon: AccountIcon,
                    text: 'Account Info'
                }]
            }
        });

        menu.setNavigationDrawerEnabled(true);
        menu.on('rightButtonClick', ()=> {});

    }

    /**
     * Called by super class after all components (routing, controllers, views, etc.) have been loaded and the
     * app is up and running.
     */
    static done() {
    }
}

document.addEventListener('deviceready', App.initialize.bind(App));