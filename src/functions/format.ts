export function FormatMoney(money: number): string{
    return money.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) + " F$"
}

export function CapitalizeString(input: string): string {
    return input
        .split('_') // split  by _
        .map((word, index) => 
            index === 0 
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
                : word.toLowerCase() 
        )
        .join(' ');
}

export function FormatDate(date: Date){
    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        })
}