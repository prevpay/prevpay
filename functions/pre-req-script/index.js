// Função para gerar número sequencial para evitar idempotência
const SequencialKey = 'team-02-11990111401';
const receiverOne = 60;
const receiverTwo = 14.35;
const wallet = 74.35;
const OtherCustomerAccountId = '6C267E55-5FB5-582F-4195-B71E18CB6846';
const Customer1AccountId = '09BB3B3D-4FB6-5216-FC80-51851CD4A319';
const Customer2AccountId = 'D8E0A966-C122-8769-131A-26DA4578D6D5';
const SecretKey = '899DCD1F-8A4B-487F-966A-6C9D1DC900F6';

function GenerateSequencial(){
 const sequencial = SequencialKey.toNumber() + 1;
 return sequencial;
}

//Armazenando Variáveis para o teste
const sequencial = GenerateSequencial();
const totalAmount = wallet
const recipientAmount1 = receiverOne | 0
const recipientAmount2 = receiverTwo | 0

// accountId do sender + totalAmount + accountId do recipient + recipientAmount
const valoresHash = OtherCustomerAccountId.toString()
 + totalAmount.toString()
 + Customer1AccountId.toString()
 + recipientAmount1.toString()
 + Customer2AccountId.toString()
 + recipientAmount2.toString(); 

//Canculando TransactionHash da transação
const hash = CryptoJS.HmacSHA256(valoresHash, SecretKey);

module.exports = { sequencial, hash }
