const colours = [
    {
      "id": "Mercury",
      "colour": "#ff2b2b"
    },
    {
      "id": "TypeScript",
      "colour": "#2b7489"
    },
    {
      "id": "PureBasic",
      "colour": "#5a6986"
    },
    {
      "id": "Objective-C++",
      "colour": "#6866fb"
    },
    {
      "id": "Self",
      "colour": "#0579aa"
    },
    {
      "id": "edn",
      "colour": "#db5855"
    },
    {
      "id": "NewLisp",
      "colour": "#87AED7"
    },
    {
      "id": "Jupyter Notebook",
      "colour": "#DA5B0B"
    },
    {
      "id": "Rebol",
      "colour": "#358a5b"
    },
    {
      "id": "Frege",
      "colour": "#00cafe"
    },
    {
      "id": "Dart",
      "colour": "#00B4AB"
    },
    {
      "id": "AspectJ",
      "colour": "#a957b0"
    },
    {
      "id": "Shell",
      "colour": "#89e051"
    },
    {
      "id": "Web Ontology Language",
      "colour": "#9cc9dd"
    },
    {
      "id": "xBase",
      "colour": "#403a40"
    },
    {
      "id": "Eiffel",
      "colour": "#946d57"
    },
    {
      "id": "Nix",
      "colour": "#7e7eff"
    },
    {
      "id": "RAML",
      "colour": "#77d9fb"
    },
    {
      "id": "MTML",
      "colour": "#b7e1f4"
    },
    {
      "id": "Racket",
      "colour": "#22228f"
    },
    {
      "id": "Elixir",
      "colour": "#6e4a7e"
    },
    {
      "id": "SAS",
      "colour": "#B34936"
    },
    {
      "id": "Agda",
      "colour": "#315665"
    },
    {
      "id": "wisp",
      "colour": "#7582D1"
    },
    {
      "id": "D",
      "colour": "#ba595e"
    },
    {
      "id": "Kotlin",
      "colour": "#F18E33"
    },
    {
      "id": "Opal",
      "colour": "#f7ede0"
    },
    {
      "id": "Crystal",
      "colour": "#776791"
    },
    {
      "id": "Objective-C",
      "colour": "#438eff"
    },
    {
      "id": "ColdFusion CFC",
      "colour": "#ed2cd6"
    },
    {
      "id": "Oz",
      "colour": "#fab738"
    },
    {
      "id": "Mirah",
      "colour": "#c7a938"
    },
    {
      "id": "Objective-J",
      "colour": "#ff0c5a"
    },
    {
      "id": "Gosu",
      "colour": "#82937f"
    },
    {
      "id": "FreeMarker",
      "colour": "#0050b2"
    },
    {
      "id": "Ruby",
      "colour": "#701516"
    },
    {
      "id": "Component Pascal",
      "colour": "#b0ce4e"
    },
    {
      "id": "Arc",
      "colour": "#aa2afe"
    },
    {
      "id": "Brainfuck",
      "colour": "#2F2530"
    },
    {
      "id": "Nit",
      "colour": "#009917"
    },
    {
      "id": "APL",
      "colour": "#5A8164"
    },
    {
      "id": "Go",
      "colour": "#375eab"
    },
    {
      "id": "Visual Basic",
      "colour": "#945db7"
    },
    {
      "id": "PHP",
      "colour": "#4F5D95"
    },
    {
      "id": "Cirru",
      "colour": "#ccccff"
    },
    {
      "id": "SQF",
      "colour": "#3F3F3F"
    },
    {
      "id": "Glyph",
      "colour": "#e4cc98"
    },
    {
      "id": "Java",
      "colour": "#b07219"
    },
    {
      "id": "MAXScript",
      "colour": "#00a6a6"
    },
    {
      "id": "Scala",
      "colour": "#DC322F"
    },
    {
      "id": "Makefile",
      "colour": "#427819"
    },
    {
      "id": "ColdFusion",
      "colour": "#ed2cd6"
    },
    {
      "id": "Perl",
      "colour": "#0298c3"
    },
    {
      "id": "Lua",
      "colour": "#000080"
    },
    {
      "id": "Vue",
      "colour": "#2c3e50"
    },
    {
      "id": "Verilog",
      "colour": "#b2b7f8"
    },
    {
      "id": "Factor",
      "colour": "#636746"
    },
    {
      "id": "Haxe",
      "colour": "#df7900"
    },
    {
      "id": "Pure Data",
      "colour": "#91de79"
    },
    {
      "id": "Forth",
      "colour": "#341708"
    },
    {
      "id": "Red",
      "colour": "#ee0000"
    },
    {
      "id": "Hy",
      "colour": "#7790B2"
    },
    {
      "id": "Volt",
      "colour": "#1F1F1F"
    },
    {
      "id": "LSL",
      "colour": "#3d9970"
    },
    {
      "id": "eC",
      "colour": "#913960"
    },
    {
      "id": "CoffeeScript",
      "colour": "#244776"
    },
    {
      "id": "HTML",
      "colour": "#e44b23"
    },
    {
      "id": "Lex",
      "colour": "#DBCA00"
    },
    {
      "id": "API Blueprint",
      "colour": "#2ACCA8"
    },
    {
      "id": "Swift",
      "colour": "#ffac45"
    },
    {
      "id": "C",
      "colour": "#555555"
    },
    {
      "id": "AutoHotkey",
      "colour": "#6594b9"
    },
    {
      "id": "Isabelle",
      "colour": "#FEFE00"
    },
    {
      "id": "Metal",
      "colour": "#8f14e9"
    },
    {
      "id": "Clarion",
      "colour": "#db901e"
    },
    {
      "id": "JSONiq",
      "colour": "#40d47e"
    },
    {
      "id": "Boo",
      "colour": "#d4bec1"
    },
    {
      "id": "AutoIt",
      "colour": "#1C3552"
    },
    {
      "id": "Clojure",
      "colour": "#db5855"
    },
    {
      "id": "Rust",
      "colour": "#dea584"
    },
    {
      "id": "Prolog",
      "colour": "#74283c"
    },
    {
      "id": "SourcePawn",
      "colour": "#5c7611"
    },
    {
      "id": "AMPL",
      "colour": "#E6EFBB"
    },
    {
      "id": "FORTRAN",
      "colour": "#4d41b1"
    },
    {
      "id": "ANTLR",
      "colour": "#9DC3FF"
    },
    {
      "id": "Harbour",
      "colour": "#0e60e3"
    },
    {
      "id": "Tcl",
      "colour": "#e4cc98"
    },
    {
      "id": "BlitzMax",
      "colour": "#cd6400"
    },
    {
      "id": "PigLatin",
      "colour": "#fcd7de"
    },
    {
      "id": "Lasso",
      "colour": "#999999"
    },
    {
      "id": "ECL",
      "colour": "#8a1267"
    },
    {
      "id": "VHDL",
      "colour": "#adb2cb"
    },
    {
      "id": "Elm",
      "colour": "#60B5CC"
    },
    {
      "id": "Propeller Spin",
      "colour": "#7fa2a7"
    },
    {
      "id": "X10",
      "colour": "#4B6BEF"
    },
    {
      "id": "IDL",
      "colour": "#a3522f"
    },
    {
      "id": "ATS",
      "colour": "#1ac620"
    },
    {
      "id": "Ada",
      "colour": "#02f88c"
    },
    {
      "id": "Unity3D Asset",
      "colour": "#ab69a1"
    },
    {
      "id": "Nu",
      "colour": "#c9df40"
    },
    {
      "id": "LFE",
      "colour": "#004200"
    },
    {
      "id": "SuperCollider",
      "colour": "#46390b"
    },
    {
      "id": "Oxygene",
      "colour": "#cdd0e3"
    },
    {
      "id": "ASP",
      "colour": "#6a40fd"
    },
    {
      "id": "Assembly",
      "colour": "#6E4C13"
    },
    {
      "id": "Gnuplot",
      "colour": "#f0a9f0"
    },
    {
      "id": "JFlex",
      "colour": "#DBCA00"
    },
    {
      "id": "NetLinx",
      "colour": "#0aa0ff"
    },
    {
      "id": "Turing",
      "colour": "#45f715"
    },
    {
      "id": "Vala",
      "colour": "#fbe5cd"
    },
    {
      "id": "Processing",
      "colour": "#0096D8"
    },
    {
      "id": "Arduino",
      "colour": "#bd79d1"
    },
    {
      "id": "FLUX",
      "colour": "#88ccff"
    },
    {
      "id": "NetLogo",
      "colour": "#ff6375"
    },
    {
      "id": "C Sharp",
      "colour": "#178600"
    },
    {
      "id": "CSS",
      "colour": "#563d7c"
    },
    {
      "id": "Emacs Lisp",
      "colour": "#c065db"
    },
    {
      "id": "Stan",
      "colour": "#b2011d"
    },
    {
      "id": "SaltStack",
      "colour": "#646464"
    },
    {
      "id": "QML",
      "colour": "#44a51c"
    },
    {
      "id": "Pike",
      "colour": "#005390"
    },
    {
      "id": "LOLCODE",
      "colour": "#cc9900"
    },
    {
      "id": "ooc",
      "colour": "#b0b77e"
    },
    {
      "id": "Handlebars",
      "colour": "#01a9d6"
    },
    {
      "id": "J",
      "colour": "#9EEDFF"
    },
    {
      "id": "Mask",
      "colour": "#f97732"
    },
    {
      "id": "EmberScript",
      "colour": "#FFF4F3"
    },
    {
      "id": "TeX",
      "colour": "#3D6117"
    },
    {
      "id": "Nemerle",
      "colour": "#3d3c6e"
    },
    {
      "id": "KRL",
      "colour": "#28431f"
    },
    {
      "id": "Ren'Py",
      "colour": "#ff7f7f"
    },
    {
      "id": "Unified Parallel C",
      "colour": "#4e3617"
    },
    {
      "id": "Golo",
      "colour": "#88562A"
    },
    {
      "id": "Fancy",
      "colour": "#7b9db4"
    },
    {
      "id": "OCaml",
      "colour": "#3be133"
    },
    {
      "id": "Shen",
      "colour": "#120F14"
    },
    {
      "id": "Pascal",
      "colour": "#b0ce4e"
    },
    {
      "id": "F#",
      "colour": "#b845fc"
    },
    {
      "id": "Puppet",
      "colour": "#302B6D"
    },
    {
      "id": "ActionScript",
      "colour": "#882B0F"
    },
    {
      "id": "Diff",
      "colour": "#88dddd"
    },
    {
      "id": "Ragel in Ruby Host",
      "colour": "#9d5200"
    },
    {
      "id": "Fantom",
      "colour": "#dbded5"
    },
    {
      "id": "Zephir",
      "colour": "#118f9e"
    },
    {
      "id": "Click",
      "colour": "#E4E6F3"
    },
    {
      "id": "Smalltalk",
      "colour": "#596706"
    },
    {
      "id": "DM",
      "colour": "#447265"
    },
    {
      "id": "Ioke",
      "colour": "#078193"
    },
    {
      "id": "PogoScript",
      "colour": "#d80074"
    },
    {
      "id": "LiveScript",
      "colour": "#499886"
    },
    {
      "id": "JavaScript",
      "colour": "#f1e05a"
    },
    {
      "id": "VimL",
      "colour": "#199f4b"
    },
    {
      "id": "PureScript",
      "colour": "#1D222D"
    },
    {
      "id": "ABAP",
      "colour": "#E8274B"
    },
    {
      "id": "Matlab",
      "colour": "#bb92ac"
    },
    {
      "id": "Slash",
      "colour": "#007eff"
    },
    {
      "id": "R",
      "colour": "#198ce7"
    },
    {
      "id": "Erlang",
      "colour": "#B83998"
    },
    {
      "id": "Pan",
      "colour": "#cc0000"
    },
    {
      "id": "LookML",
      "colour": "#652B81"
    },
    {
      "id": "Eagle",
      "colour": "#814C05"
    },
    {
      "id": "Scheme",
      "colour": "#1e4aec"
    },
    {
      "id": "PLSQL",
      "colour": "#dad8d8"
    },
    {
      "id": "Python",
      "colour": "#3572A5"
    },
    {
      "id": "Max",
      "colour": "#c4a79c"
    },
    {
      "id": "Common Lisp",
      "colour": "#3fb68b"
    },
    {
      "id": "Latte",
      "colour": "#A8FF97"
    },
    {
      "id": "XQuery",
      "colour": "#5232e7"
    },
    {
      "id": "Omgrofl",
      "colour": "#cabbff"
    },
    {
      "id": "XC",
      "colour": "#99DA07"
    },
    {
      "id": "Nimrod",
      "colour": "#37775b"
    },
    {
      "id": "SystemVerilog",
      "colour": "#DAE1C2"
    },
    {
      "id": "Chapel",
      "colour": "#8dc63f"
    },
    {
      "id": "Groovy",
      "colour": "#e69f56"
    },
    {
      "id": "Dylan",
      "colour": "#6c616e"
    },
    {
      "id": "E",
      "colour": "#ccce35"
    },
    {
      "id": "Parrot",
      "colour": "#f3ca0a"
    },
    {
      "id": "Grammatical Framework",
      "colour": "#79aa7a"
    },
    {
      "id": "Game Maker Language",
      "colour": "#8fb200"
    },
    {
      "id": "Papyrus",
      "colour": "#6600cc"
    },
    {
      "id": "NetLinx+ERB",
      "colour": "#747faa"
    },
    {
      "id": "Clean",
      "colour": "#3F85AF"
    },
    {
      "id": "Alloy",
      "colour": "#64C800"
    },
    {
      "id": "Squirrel",
      "colour": "#800000"
    },
    {
      "id": "PAWN",
      "colour": "#dbb284"
    },
    {
      "id": "UnrealScript",
      "colour": "#a54c4d"
    },
    {
      "id": "Standard ML",
      "colour": "#dc566d"
    },
    {
      "id": "Slim",
      "colour": "#ff8f77"
    },
    {
      "id": "Perl6",
      "colour": "#0000fb"
    },
    {
      "id": "Julia",
      "colour": "#a270ba"
    },
    {
      "id": "Haskell",
      "colour": "#29b544"
    },
    {
      "id": "NCL",
      "colour": "#28431f"
    },
    {
      "id": "Io",
      "colour": "#a9188d"
    },
    {
      "id": "Rouge",
      "colour": "#cc0088"
    },
    {
      "id": "cpp",
      "colour": "#f34b7d"
    },
    {
      "id": "AGS Script",
      "colour": "#B9D9FF"
    },
    {
      "id": "Dogescript",
      "colour": "#cca760"
    },
    {
      "id": "nesC",
      "colour": "#94B0C7"
    }
  ];

  export default colours