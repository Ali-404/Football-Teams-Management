export function FormatMoney(money: number): string{
    return money.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) + " F$"
}