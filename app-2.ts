import { Action } from './ngrx-fake/ngrx';
import { incrementadorAction,
        decrementadorAction, 
        multiplicarAction, 
        dividirAction, 
        resetAction } from './contador/contador.actions';



function reducer( state = 10, action: Action ) {

    switch ( action.type ) {

        case 'INCREMENTAR': 
            return state += 1;

        case 'DECREMENTAR': 
            return state -= 1;

        case 'MULTIPLICAR': 
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;
        
        case 'RESET':
            return state = 0;


        default: 
            return state;
    }

}


console.log(  reducer( 10, incrementadorAction )  ); // 11

console.log(  reducer( 10, decrementadorAction )  ); // 9

console.log(  reducer( 10, multiplicarAction )  ); // 20

console.log(  reducer( 10, dividirAction )  ); // 5

console.log(  reducer( 10, resetAction )  ); // 0