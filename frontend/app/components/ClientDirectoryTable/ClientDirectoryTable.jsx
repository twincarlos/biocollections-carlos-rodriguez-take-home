import { Suspense } from "react";
import ClientDirectoryTableWrapper from "./ ClientDirectoryTableWrapper";

function ClientDirectoryTable({ searchParams }) {
    return (
        <div className="client-directory-table">
            <Suspense fallback={<div>Loading...</div>}>
                <ClientDirectoryTableWrapper searchParams={searchParams} />
            </Suspense>
        </div>
    );
};

export default ClientDirectoryTable;