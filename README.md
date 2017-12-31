# iron Dapp - v.1.1

<img src="https://png.icons8.com/color/40/000000/code-file.png" height="45"><img src="https://png.icons8.com/color/40/000000/imac.png" height="45">

The iron Dapp to interact with the iron Bank Network blockchain. 🚀

<img src="https://github.com/iron-bank/iron-Dapp/blob/master/iron_screen.png">

# How to use:

### 1) Run an iron node locally (go-IRON)
```
$ iron --fast --cache=1024 --rpc --rpccorsdomain "*" console
```
  **NOTE:** Remember you need to sync with the blockchain first:

```
$ iron --bootnodes <bootnode-enode-parameters>
```
Read [this](https://github.com/iron-bank/Documentation/blob/master/Building.md) to learn about how to sync!

  **INFO:** You can change `--rpccorsdomain "*"`  to  `--rpccorsdomain "file://<your-local-path-to-Start_iron.html>"`, for more security measures.

### 2) Download and Run

Terminal:
```
$ git clone https://github.com/iron-bank/iron-Dapp.git
$ cd iron-Dapp
$ open Start_iron.html 
```

Manual:
1) Download this repo (.zip) and open it.

2) Double click <strong>"Start_iron.html"</strong> file.

3) A web browser should pop up running the iron Dapp, enjoy! 



**NOTE:** The wallet is under development,
may contain severe bugs! 
