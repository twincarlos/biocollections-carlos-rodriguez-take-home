import "./ClientDirectoryFilters.css";
import Image from "next/image";
import Input from "../Inputs/Input/Input";
import Select from "../Inputs/Select/Select";
import ClientDirectoryIcons from "./ClientDirectoryIcons";
import searchIcon from "../../../public/images/fa-magnifying-glass.png";

function ClientDirectoryFilters({defaultValues={}}) {
    return (
        <div className="client-directory-filters card padding-large flex flex-direction--column gap-medium">
            <div className="client-directory-filters--header flex flex-justify-content--space-between flex-align-items--center">
                <h2 className="title">Client Directory</h2>
                <ClientDirectoryIcons mobileOnly={true} />
            </div>
            <div className="flex flex-direction--row flex-justify-content--space-between">
                <form
                    className="filters gap-small flex flex-direction--row flex-justify-content--flex-start flex-align-items--center"
                    method="GET"
                >
                    <Input
                        className="client-directory-filters--name"
                        type="text"
                        name="name"
                        defaultValue={defaultValues.name || ""}
                        label={"Name"}
                    />
                    <Input
                        className="client-directory-filters--birthday"
                        type="text"
                        name="birthday"
                        label={"Birthday"}
                        defaultValue={defaultValues.birthday || ""}
                        placeholder={"MM / DD / YYYY"}
                    />
                    <Select
                        className="client-directory-filters--client-type"
                        name="type"
                        label={"Account Type"}
                        defaultValue={defaultValues.type || "Checking"}
                        options={[
                            { value: "Checking", label: "Checking" },
                            { value: "Savings", label: "Savings" },
                        ]}
                    />
                    <button
                        className="primary-button button--small-icon client-directory-filters--submit"
                        aria-label="Search"
                        type="submit"
                    >
                        <Image
                            alt={"Search Icon"}
                            src={searchIcon}
                        />
                    </button>
                </form>
                <ClientDirectoryIcons />
            </div>
        </div>
    );
};

export default ClientDirectoryFilters;