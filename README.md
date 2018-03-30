# iron Dapp - v.1.8

<img src="https://png.icons8.com/color/40/000000/code-file.png" height="45"><img src="https://png.icons8.com/color/40/000000/imac.png" height="45">

The iron Dapp to interact with the iron Bank Network blockchain. 🚀

<img src="https://github.com/ironBankNetwork/iron-Dapp/blob/master/iron_screen.png">

# How to use:

### 1) Run an iron node locally - you may use either [go-IRON](https://github.com/ironBankNetwork/go-IRON) or [Ganache](http://truffleframework.com/ganache)
```
go-IRON, run:

$ iron --fast --cache=1024 --rpc --rpccorsdomain "*" console
```
  **NOTE:** Remember you need to sync with the blockchain in case you have more peer in your local network:

```
$ iron --bootnodes <bootnode-enode-parameters>
```
In case you are using go-IRON, read [this](https://github.com/ironBankNetwork-Developers/Documentation/blob/master/Building.md) to learn about how to sync!

  **INFO:** You can change `--rpccorsdomain "*"`  to  `--rpccorsdomain "<filePath>.html>"`, for more security measures.

### 2) Download and Run

Terminal:
```
$ git clone https://github.com/ironBankNetwork/iron-Dapp.git
$ cd iron-Dapp
$ npm start
```

Last Release file:
1) Download the last built repo from [Releases](https://github.com/ironBankNetwork/iron-Dapp/releases).

2) Double click the downloaded file.

3) The web App should pop up running the iron Dapp, enjoy! 


**NOTE:** The iron Dapp is under development, may contain severe bugs! 

Author/Developer: [Alber Erre](https://github.com/AlberErre)
