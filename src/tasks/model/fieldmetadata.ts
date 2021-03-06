
export class FieldMetadata {
    public name: string;
    public type: string;
    public typeInDecorator: string;
    public generateIndex: boolean = false;
    public indexName: string;
    public ignoredInHistory: boolean = false;
    public isArray: boolean = false;
    public nullable: boolean = false;
}