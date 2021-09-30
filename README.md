# coindex-cli
This is a cli application to get the current pricing of various crypto coins via an API.

## Commands
### <b>coindex</b>
Main command
#### Options
```
-V, --version   output the version number
-h, --help      display help for command
```

### <b>coindex key</b>
Command to handle API Key store
#### Options
```
set         Set API Key -- Get at https://nomics.com
show        Show API Key
remove      Remove API Key
```
### <b>coindex check price</b>
Command to get 
#### Options
```
--coin <coin>      Select specific Coin types [comma seprated] (default: "BTC,ETH,XRP,DOGE")
--curr <currency>  Select a currency (default: "INR")
  ```
  ----------
  
  ## Installation
  ```
  git clone https://github.com/aadarshp31/coindex-cli.git
  cd coindex-cli
  npm run init
  ```

  ## Validate Installation
  This command should return the version of coindex-cli installed on your system. If it throws error, then it is not installed properly.
  ```
  coindex --version
  ```
----------

  ## Uninstall 
  ```
  git clone https://github.com/aadarshp31/coindex-cli.git
  cd coindex-cli
  npm run uninstall
  ```