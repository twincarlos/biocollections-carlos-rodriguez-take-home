"use client";
import { useState } from "react";
import Input from "../Inputs/Input/Input";
import Select from "../Inputs/Select/Select";
import { useUpdate } from "@/app/hooks/useUpdate";

function ClientDetails({ client }) {
    const [clientData, setClientData] = useState({ ...client });
    const [enableEdit, setEnableEdit] = useState(false);
    const { handleUpdate, loading, error } = useUpdate();

    async function handleSubmit(e) {
        e.preventDefault();
        await handleUpdate({
            url: `http://localhost:8000/clients/${client._id}`,
            method: "PUT",
            messageOnSuccess: "Client updated successfully!",
            data: clientData
        });
        await handleUpdate({
            url: `http://localhost:8000/notifications`,
            method: "POST",
            data: { content: `Account #${client.account} has been updated` }
        });
    };

    return (
        <div className="client-details flex flex-direction--column flex-align-items--flex-start flex-justify-content--flex-start gap-medium">
            <h2 className="title">Client Details</h2>
            <div className="flex flex-direction--column flex-align-items--flex-start flex-justify-content--flex-start gap-small">
                <form
                    className="flex flex-direction--column flex-align-items--flex-start flex-justify-content--flex-start gap-medium"
                    onSubmit={handleSubmit}
                >
                    <Input
                        className=""
                        type="text"
                        name="name"
                        readOnly={!enableEdit}
                        value={clientData.name}
                        onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                        label={"Name"}
                    />
                    <Input
                        className=""
                        type="text"
                        name="birthday"
                        label={"Birthday"}
                        readOnly={!enableEdit}
                        value={clientData.birthday}
                        onChange={(e) => setClientData({ ...clientData, birthday: e.target.value })}
                        placeholder={"MM / DD / YYYY"}
                    />
                    <Select
                        className=""
                        name="type"
                        label={"Account Type"}
                        readOnly={!enableEdit}
                        value={clientData.type}
                        onChange={(e) => setClientData({ ...clientData, type: e.target.value })}
                        options={[
                            { value: "Checking", label: "Checking" },
                            { value: "Savings", label: "Savings" },
                        ]}
                    />
                    {
                        enableEdit && (
                            <button
                                type="submit"
                                disabled={JSON.stringify(clientData) === JSON.stringify(client) || loading}
                                className="primary-button padding-xs"
                            >
                                Save Changes
                            </button>
                        )
                    }
                </form>
                {
                    !enableEdit && (
                        <button
                            className="secondary-button padding-xs"
                            type="button"
                            onClick={() => setEnableEdit(true)}
                        >
                            Edit Details
                        </button>
                    )
                }
            </div>
            { error && <div><span className="material-symbols-outlined">warning</span> {error}</div> }
        </div>
    );
};

export default ClientDetails;