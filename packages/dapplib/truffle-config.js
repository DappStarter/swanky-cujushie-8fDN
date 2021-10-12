require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name random stick exchange inflict drive flock genuine'; 
let testAccounts = [
"0x6a007b68ff68ec2f01f1f17a1be5b31e2c4ace9210e16b3d9084923291293a17",
"0x2974f335a36b5ab11a2ed8ec06c3fcb55b0ea9f8e3117e665a46e9df1be761f2",
"0x8a3b8d7665c1ed6b50ccef5f23bda3f860336800312aafdb2b9dc313787f54f3",
"0xae33f2878a8b4a455fe418287bca90fe3a131dbe82a2bd035afce8be5171b3c3",
"0xec3b125efa54d0daf35922fa4a37006cdbc39626c2daf120198eaba358fef741",
"0x72621837e7124612a3a8689f6f71c7a7ccc25165f401603149a94ca1a0afacf2",
"0xdab456b1987d302690232042284635d7ebf54162915e62c395c4dc48694f4a4d",
"0x65cda4f75ca2a20a2cf595ad4196e760926234408fe90e40bf11092d5ca3107b",
"0x40bdb0acf623ae530e40e7aec0fbd4461ea5a5f0b321f05564232464ae7fbcfb",
"0x5421174e8005450e9cd3770ad907689e9e11fe86e12e0d5b43adea6ad4de5d31"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

