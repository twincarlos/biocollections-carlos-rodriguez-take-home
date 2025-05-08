import "./Table.css";

function Table({ data = [], columns = [] }) {
    if (data.length === 0) {
        return <div className="no-data">No data available</div>;
    }

    const columnKeys = columns.length > 0 ? columns : Object.keys(data[0]);

    return (
        <div className="table-container card">
            <table>
                <thead>
                    <tr>
                        {columnKeys.map((column) => (
                            <th key={column.key}>{column.component}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columnKeys.map((column) => (
                                <td key={column.key}>{row[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;