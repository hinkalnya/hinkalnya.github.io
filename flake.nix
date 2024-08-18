{
  description = "RTU Task Helper";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
  };

  outputs = { self, nixpkgs }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
    };
  in {
    devShells."${system}".default = pkgs.mkShell {
      packages = with pkgs; [
        nodejs
      ];
    };

    apps."${system}".default = let
      dev-server = pkgs.writeShellApplication {
        name = "rtu-task-helper-dev-server";
        runtimeInputs = [ pkgs.nodejs ];
        text = "npm run start";
      };
    in {
      type = "app";
      program = "${dev-server}/bin/rtu-task-helper-dev-server";
    };

    packages."${system}".default = pkgs.stdenv.mkDerivation {
      name = "rtu-task-helper";
      src = ./.;

      buildInputs = [ pkgs.nodejs ];

      installPhase = ''
        mkdir -p $out/bin
        cp -r $src/* $out/bin/
      '';

      buildPhase = ''
        npm install
        npm run build
      '';
    };
  };
}

