export const getVolume = (transactions) => {
    let volume = 0;
    transactions.forEach((transaction) => {
        const transfers = transaction.transfers.sort(
            (a, b) =>
                parseInt(b.amount) * 10 ** -b.token.decimals * b.token.usdPrice -
                parseInt(a.amount) * 10 ** -a.token.decimals * a.token.usdPrice,
        );
        if (transfers.length === 0) return;
        const tmpVolume = parseInt(transfers[0].amount) * 10 ** -transfers[0].token.decimals * transfers[0].token.usdPrice;
        volume += tmpVolume;
    });
    return volume === 0 ? 0 : volume.toFixed(2);
}

