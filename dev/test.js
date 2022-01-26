const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

console.log(bitcoin);

// bitcoin.createNewBlock(1234, 'qwerqwerqwre', 'sadfasdfasyuighjdfasdf');
// bitcoin.createNewBlock(246, 'qasdfsadfasdfwre', 'sadfazxcvsdfghjasdf');
// bitcoin.createNewBlock(34563456, 'qwerqwqwervcxcverqwre', 'sadfafgjsdcvzxcvasdfasdf');
//
// bitcoin.createNewBlock(12341234, 'qwerqwerqwerwqer','asdfasfavxczcvzxcv');
// bitcoin.createNewTransaction(100, 'januszreqwrwqe', 'grazynazxcvzxcvzxvc');
//
// bitcoin.createNewBlock(234234, 'qwerqwerqssadfrwqer','asdfxzcvzxcvvxczcvzxcv');
//
// bitcoin.createNewTransaction(125, 'januszreqwrwqe', 'grazynazxcvzxcvzxvc');
// bitcoin.createNewTransaction(25, 'grazynazxcvzxcvzxvc', 'januszreqwrwqe');
// bitcoin.createNewTransaction(15, 'januszreqwrwqe', 'grazynazxcvzxcvzxvc');
//
// bitcoin.createNewBlock(46567, 'qwerqwesadfrqssadfrwqer','asdfxzcvsafdzxcvvxczcvzxcv');

// const previousBlockHash = 'asdfasqwerasdxczadfqwerqwer';
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: 'adfasfsaf',
//         recipient: 'zxcvzsfvzxvc'
//     },
//     {
//         amount: 2,
//         sender: '12234234a2342134',
//         recipient: 'zxc689asdf796798679xvc'
//     },
//     {
//         amount: 13,
//         sender: 'a123123dfasfasadqwesaf',
//         recipient: 'zxbnmvbmnvbmvbmnzxvc'
//     },
// ];

// bitcoin.hashBlock(previousBlockHash, currentBlockData, 29822);
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 29822));
