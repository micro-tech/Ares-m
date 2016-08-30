Ares 2
======
The only fully open source solution that brings you:

* True graphical Interface Builder and IDE written in its own frameworks - named "Ares"
* True app development framework in pure Javascript without any HTML for Single Page Applications - named "Enyo"

[![NPM](https://nodei.co/npm/ares-ecosystem-ide.png)](https://nodei.co/npm/ares-ecosystem-ide/)



Ares 2-M is at v2.18-M
----------------------------

This release plays nice with Enyo 2.5.1 and Enyo 2.6.0

Fixe's have been add for enyo.ready  and a mod to enyo/source/boot/boot.js
Added new download for Enyo-2.5.1.1 from box.net that includes the new boot.js file.
Added a local Enyo Bootplat to pull enyo-2.6.0 from.
Added new boot.js file.


Ares Ecosystem is at v2.17
----------------------------

This release plays nice with recent versions of Safari, Firefox, and Chrome

If you want to play with Ares easily - June 11, 2016
-----------------------------------------------------

If you don't have "nodejs" installed (server side Javascript engine) then go to this link to get it for your OS:

		https://nodejs.org/en/

Next "cd" into your home directory and use the "node package manager" (NPM) to install the Ares Ecosystem IDE

		npm -d install ares-ecosystem-ide

You can then launch Ares by issuing this command from the terminal:

		~/node_modules/.bin/ares-ecosystem-ide -b

* Note 1: the tilde is for a unix system to jump to your home directory, on a Windows PC you'd have to type the exact location.
* Note 2: you may want to launch with "sudo" (on unix systems) to have permissions to download a new bootplate (starter Enyo project) by using Ares menus. 
* Note 3: alternatively you could download your preferred bootplate yourself directly. As of this moment the preferred version is here: http://enyojs.com/archive/bootplate-2.3.0-pre.12.zip
* Note 4: Enyo 2.5 and 2.7 went in another direction to target the LG Smart TVs more directly and do not work with the Ares Ecosystem at this time. You can not open them in Deimos (Interface Builder). 


Quick Launch instructions after cloning the repo
----------------------------------------------------------------

Note: cloning the repo is about 250 megs but if you install the completed product from NPM it's only a 10 meg transfer. You should only clone the repo if you want to start enhancing the Ares Ecosystem. If you want to just develop apps with this system, do the NPM install.

To start experimenting immediately with Ares / Enyo do the following:

* Make sure node.js is installed (It is a set of command-line tools for javascript server applications). https://nodejs.org/en/
* Clone or download this repo.
* Open a terminal and move into the main directory of this project.
* run this command: node ide.js
* now open your web browser to: http://127.0.0.1:9009/ide


update - June 4, 2016
-------------------------

My name is Aaron Rosenzweig. I see Enyo/Ares as one product. It provides today's most compelling user experience coupled with joy of development for the modern codewarrior. 

That being said, the product has suffered from lack of purpose but the good fortune of being fully open source. As there is no competing product that has seen the same level of effort in cross platform compatibility, slick user feel, and developer productivity; I have forked this project to make it viable in 2016 and beyond. 

The promise is to allow developers to use an Interface Builder along with a rich framework that makes javascript development not only fun, but immensely productive. We are building full blown applications. We are not writing any lines of HTML. This is the definitive way to produce "offline-first" applications by which all other efforts will be judged. 

Current status
----------------------

* Ares Ecosystem v2.17 is only compatible with Enyo up to v2.3.9
* Enyo v2.5.7 is what WebOS and LuneOS use and was the first release for LG Smart TVs
* Enyo v2.7 is the most recent public release of the core frameworks from LG


Everything below here is over 2 years old and perhaps no longer current:
--------------------------------------------------------------------------

Overview[](id:overview)
--------

Ares 2 is an open-source ([Apache 2](LICENSE-2.0.txt)) browser-based code editor and UI designer for developing [Enyo 2](http://enyojs.com) applications.

Applications made using Ares 2 rely on the Enyo highly portable web technology:  they are cross-platform (Linux/Mac/Windows, Android,/iOS/WindowsPhone/Windows8/webOS, Chrome/IE/Firefox/Opera), cross-form-factors (Desktop, Phone, Tablet, TV etc).

* Architecture & contributions: See [our contribution guide](CONTRIBUTE.md)
* Our current understanding of the [roadmap](#roadmap)
* Crash-guide to [using Ares](#usage)
* Few details on [some Ares features](#features)
* See [basic Ares security principles](#security)
* Learn how to [extend Ares using plugins](#extend)

Roadmap[](id:roadmap)
-------

### Current status

Although Ares is still a work in progress, we have reached the point where we are opening the repo and will do further development in the open, so we encourage you to follow our progress and give us feedback as we push Ares forward.

You can give us feedback either via the [Ares category of the EnyoJS Forums](http://forums.enyojs.com/categories/ares) or via the [EnyoJS JIRA](https://enyojs.atlassian.net/) (using the `ares` component).

Here are the main features you can start looking at today:

* De-centralized file storage
	* Ares currently connects to a filesystem component, to edit local files (via the `fsLocal` Hermes service).  Ares can also be configured to use a per-user Dropbox account (via the `fsDropbox` Hermes service) as file storage.  See below for more details.
	* Key goals with this approach are to avoid forcing users to store files and/or credentials on Ares servers and allow freedom to choose the preferred storage location, whether cloud or local.
* Code editor
	* Ares integrates the ACE (Ajax Cloud Editor, used by Cloud9 & Mozilla) code editor for code editing
* Code intelligence
	* Upon opening/editing a JavaScript file, Ares will parse the file and display a semantic outline of the code in the right-hand panel (for purposes of demonstrating parser)
	* Code completion using symbols from:
	  * the current project
	  * the Enyo version that comes with Ares
	  * the libraries included in the project
	* In the future, this will be used for advanced features context-sensitive documentation, etc.
* UI designer for drag and drop UI editing
	* Component definitions are round-tripped from the Editor to the Designer, meaning that changes made in one will immediately appear in the other.
* Integration with [PhoneGap online build](http://build.phonegap.com)
* Project sources
	* Allow creation of new projects based on bootplate templates.
	* Allow creation of new projects based on your own project templates.
	* See [Project sources](#project-sources) for more information
	
### Future plans

The following features are in the works, and you should see them added as we move forward:

* More code completion and context-sensitive documentation
* Additional Hermes components to extend the local and cloud file storage options: We plan to add Hermes components for FTP, Box.net and more
* Improvements to the Designer component for greater ease of use
* ... and more!

**Note:**  An up-to-date view of the ongoing activities is available from The [ARES JIRA](https://enyojs.atlassian.net/browse/ENYO/component/10302), itself available from the [EnyoJS JIRA](https://enyojs.atlassian.net/browse/ENYO).

Usage[](id:usage)
-----

### Configuration

#### Proxy

Depending on your network environment, you may need to setup a proxy URL to access Internet through a
[proxy server](http://en.wikipedia.org/wiki/Proxy_server).

This proxy URL can be set up with:

1. `https_proxy` or `http_proxy` environment variable. I.e you can run node server with a command like `http_proxy=http://my-proxy.com:8080 node ide.js`
1. edit the `globalProxyUrl` parameter at the beginning of [ide.json](ide.json) file to have something like `globalProxyUrl: "http://my-proxy.com:8080"'
1. specific proxy per service. See "Advanced proxy setup" at the end of this document.

By default, the service will get the proxy specified by
`globalProxyUrl` parameter or by `https_proxy` environment variable or
by `http_proxy` environment variable.

#### Language

Language used by Ares 2 is english per default (and forced). See the `language` configuration entry in [ide.json](ide.json).
If the related language does not exist, a language will be defined according to the locale hierarchy managed by the [ilib library](http://www.jedlsoft.com/).
This forced value could be modified / disabled: another language code string value / null.

> **NB**: Don't forget to restart Ares 2.

### Install

1. Install Node.js 0.10.19 (or later) & its associated NPM (Node Package Manager) from a binary distribution, for example at [nodejs.org](http://nodejs.org/download/)
1. Install `ares-ide` using NPM:

		$ npm -d install ares-ide

	The `-d` options gives some minimal troubleshooting information, which is pretty useful as `ares-ide` is a heavy package (more than 12 MB).

1. Once installed, run it using `node_modules/.bin/ares-ide` (or `node_modules\.bin\ares-ide.cmd`) on Windows.
1. Please report the issues you find in our JIRA at [https://enyojs.atlassian.net/](https://enyojs.atlassian.net/) against the component named `ares`.

> **NB:** Since ares-0.2.12, ares is minified as it is installed

### Run

Start the IDE server: (e.g. using the Command Prompt, navigate to the ares directory and type `node ide.js`) 

	C:\Users\johndoe\node_modules\.bin> ares-ide.cmd

 or (Mac & Linux):

	$ node_modules/.bin/ares-ide

Get more information about the options using `-h` or `--help`:

	$ ares-ide --help

	Ares IDE, a front-end designer/editor web applications.
	Usage: "node ./ide.js" [OPTIONS]

	Options:
	  -h, --help        help message                                                                           [boolean]
	  -T, --runtest     Run the non-regression test suite                                                      [boolean]
	  -b, --browser     Open the default browser on the Ares URL                                               [boolean]
	  -p, --port        port (o) local IP port of the express server (default: 9009, 0: dynamic)               [default: "9009"]
	  -H, --host        host to bind the express server onto                                                   [default: "127.0.0.1"]
	  -a, --listen_all  When set, listen to all adresses. By default, listen to the address specified with -H  [boolean]
	  -c, --config      IDE configuration file                                                                 [default: "./ide.json"]
	  -l, --level       IDE debug level ('silly', 'verbose', 'info', 'http', 'warn', 'error')                  [default: "http"]
	  -L, --log         Log IDE debug to ./ide.log                                                             [boolean]
	  -D, --dev-mode	Load non-minified version of Ares and Enyo for Ares debug and development			   [boolean]

In case you want to access other parts of your machine's file-system, refer to the [local filesystem service configuration](hermes/README.md#local-filesystem-service)

### Creating an application

Once Ares is loaded in your browser, you can create a skeleton of an
application with "Edit -> Create ... " menu.  Once you've selected a
directory to create a project, you will see a popup to specify the
name, title and other parameters of your project.

To create a project skeleton, use the "Template" selector to choose
the latest bootplate version. This way, your project will be created
with a template of an application and the required enyo, layout and
extra libraries.

### Updating Enyo libraries in your application

The simplest way is to update the libraries inside your project.

For Enyo:

* remove enyo directory
* download latest release from [enyo release page](https://github.com/enyojs/enyo/releases)
* unpack in your project and rename the directory to `enyo`

For all libraries in `lib`:

* remove each directory in `lib`
* download the latest release for [layout](https://github.com/enyojs/layout/releases) and [extra](https://github.com/enyojs/extra/releases) libraries
* unpack each library and rename the directories to `extra` and `layout`

### Reporting Issues

Be sure to run Ares with `--log` (or `-L`) to capture the Ares server output in the file name `ide.log`.  Attach this log-file to you bug report on the [ARES JIRA](https://enyojs.atlassian.net/browse/ENYO/component/10302).

You may also want to increase the log verbosity, in order to better understand what is going wrong by yourself.  The default verbosity level is `http`.  You may want o increase to `info` or even `verbose`.  Lowest layer `silly` is usually for Ares core developers.

	$ node ide.js --level=info

Known Bugs[](id:known-bugs)
----------

See this [list of known issues](KNOWN-BUGS.md)

Features[](id:features)
--------

### PhoneGap Build

See [Hermes README: PhoneGap build service](hermes/README.md#phonegap-build-service).

### Dropbox

See [Hermes README: Dropbox File-System service](hermes/README.md#dropbox-filesystem-service).

Security[](id:security)
--------

Ares does not store any security token or credentials on the server.  Client-side security tokens & credentials are stored either using Cookies or using HTML5 `localStorage`.

See [Hermes Security: Authentication](hermes/README.md#security).

Extend[](id:extend)
------

Ares's plugin architecture is made to allow extensions, both in its UI (browser client) & its server.
 
### Project sources

The service **genZip** defined in `ide.json` of ares-project or `ide-plugin.json` of Ares plugins allows to intanciate new Ares project from project templates such as "**bootplate**" or any customer specific project templates.

The property `sources:` of the service **genZip** lists the template definitions that are available at project creation time.

See the section "**Project template service**" in [hermes/README.md](hermes/README.md) for more information.

### Ares plugins

Ares plugins can bring additional functionality and configuration to Ares.
An Ares plugin must follow these rules to be loaded as a plugin:

 * It must be installed in a directory under "_ares-project/node_modules_".  
 * It must have an `ide.json` in its main directory, which:
   * defines a new service entry
   * can define the client side code to load in the browser
   * can update some previously defined services (e.g.: modify/add project templates) 

#### Startup of "node ide.js"

At startup, the process "node ide.js":

 * loads the file `ide.json`
 * locates the plugins, using the first of the below method that works:
 	1. files `../../node_modules/*/ide-plugin.json` (production environment: npm installs Ares plugins aside Ares)
 	1. files `node_modules/*/ide-plugin.json` (development environment: npm installed Ares plugin under the Ares source tree)
 * sorts then in lexicographical order
 * merges them into the loaded configuration following the algorithm described in the next section.  While merging each plugin into the global configuration, the following variables are substituted:
 	* `@PLUGINDIR@`: the absolute location of each plugin root folder in the Ares server file-system.
 	* `@PLUGINURL@`: the URL to the plugin root URL, taken relatively to the Ares main page.
 * Globally substitute the following variables in the merged configuration:
 	* `@NODE@`: the path to the Node.js executable in use.  This is useful to start sub-process using the same executable
 	* `@CWD@`: Current-Working-Directory of the Ares process
	* `@INSTALLDIR@`: Root folder of `ares-project`, as it is loaded by Node.js.  This is the expected location of the `ide.js` main script.
	* `@HOME@`: the user's `$HOME` folder on Mac OSX & Linux, `%USERPROFILE%` on Windows.
 * starts services defined in the resulting loaded configuration

#### Merging configuration[](id:merging-configuration)

Ares plugin configuration are merged as follow:

 * New service entries are simply added to the current configuration
 * Service entries already existing in the current configuration are merged property by property as follow:
 	* New properties are simply added to the existing service entry
 	* For array, array entries are added to the corresponding array in the existing service
 	* For objects, object properties are applied to the corresponding object in the existing service
 	* Other properties of same type are applied to overwrite the corresponding entries in the existing service
 	* Properties with same name but different types are considered as errors and stop the startup process.
 * Other top level properties are not yet taken into account

#### Client side Ares plugin

The client code of an Ares plugin is defined by the property "`pluginUrl`" of a service entry in "ide.json".  
During the initialization process of Ares within the browser, the 'ServiceRegistry' will perform an 'enyo.load' of the javascript file (Usually a 'package.js' file) specified by the property "`pluginUrl`".  
After being loaded, the new code must invoke `ServiceRegistry.instance.pluginReady();` to notify Ares that the client side code is ready.  
See the function 'pluginReady' in the file 'services/source/ServiceRegistry.js'.

### Ares logo

It is possible to customize the logo displayed on the top-right corner of Ares.

For this, load your logo in ares (recommended size is 42x42px). Change the following line in ``utilities/source/Logo.js`` in the ``create`` function:

			this.setSource("path-to-your-logo");

To remove the logo's display from Ares, replace the call to ``this.setSource("path-to-your-logo")`` by:

			this.hideLogo();

## Advanced Proxy settings

Proxy can be configured per service in  Ares `ide.json` configuration file. Sample
advanced proxy configuration  is provided in  `ide.json` with the  `Xproxy` and
`XproxyUrl` parameters.

To setup a proxy specific to a service:

* locate the service you want in `ide.json`
* remove the `X` from `XproxyUrl` and `Xproxy` name
* configure your proxy in the value of these parameters.

Example:

	"proxyUrl": "http://myproxy.some.where.org:8080",


