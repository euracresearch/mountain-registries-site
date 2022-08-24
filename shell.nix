with (import <nixpkgs> {});
mkShell { 
  name = "matsch";
   
  buildInputs = [
      nodePackages.npm
      nodejs-16_x
  ];
  shellHook =
  	''
		export PATH=$PWD/node_modules/.bin:$PATH
  	'';

}
