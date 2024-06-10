
export class ProjectPageLinkBuilder {
    private linkComponents: string[] = ["/dev", "", "", ""];

    setType = (type: string) => {
        this.linkComponents[1] = `/${type}`;
        return this;
    };

    setId = (id: string) => {
        this.linkComponents[2] = `/${id}`;
        return this;
    };

    addDetails = () => {
        this.linkComponents[3] = "/details";
        return this;
    }

    build = () => {
        return this.linkComponents.join("");
    };
}