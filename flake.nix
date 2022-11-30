{
  description = "Mountain Registries Site";

  inputs = {
    nixpkgs-unstable.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    nixpkgs-stable.url = "github:nixos/nixpkgs/release-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs-unstable, nixpkgs-stable, flake-utils }:
  flake-utils.lib.eachDefaultSystem (system:
  let
    stable = nixpkgs-stable.legacyPackages.${system};
    unstable = nixpkgs-unstable.legacyPackages.${system};

    packages = with stable; [
      nodejs_20
      unstable.pnpm
    ];
  in
  {
  devShells.default = stable.mkShell {
       name = "⛰️";
       buildInputs = packages;
    };
  });
}

