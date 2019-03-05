module.exports = {
    "extends": "eslint:recommended",

    "parserOptions": {						//es6
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },

    "env": {								
        "amd": true,
        "node": true,  
        "es6": true
    },

    "globals": {							
    	"cc": true,
    	"module": true,
    	"SocketBase": true,
    },

    "rules": {
        "no-mixed-spaces-and-tabs": 0,		
    },
};