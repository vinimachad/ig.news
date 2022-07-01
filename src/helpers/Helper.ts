export class Helper {

    static INSTANCE: Helper = new Helper()

    private init() { }

    numberFormatToCurrency(value: number): string {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        return formatter.format(value)
    }
}