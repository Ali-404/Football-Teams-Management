export function FormatMoney(money: number): string{
    return money.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) + " F$"
}


export function FormatNumber(num : number): string{
    if (num < 1000) return num.toString(); // less than 1k

    const units = ["", "K", "M", "B", "T"];
    const magnitude = Math.floor(Math.log10(num) / 3); // find the unit index
    const scaledNum = num / Math.pow(1000, magnitude); // scale the number

    return `${scaledNum.toFixed(1).replace(/\.0$/, "")}${units[magnitude]}`;
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

export function FormatDate(date: Date): string{
    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        })
}