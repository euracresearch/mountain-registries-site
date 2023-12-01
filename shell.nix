with (import <nixpkgs> {});
let
    unstable = import <nixos-unstable> {};
in
mkShell {
  name = "mrs-shell";

  buildInputs = [
      unstable.nodePackages_latest.pnpm
      nodePackages.npm
      nodejs_20
  ];


  shellHook =
    ''
        export PATH=$PATH:$PWD/node_modules/.bin
    '';
}
