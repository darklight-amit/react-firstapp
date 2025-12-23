// this will fetch data from https://jsonmock.hackerrank.com/api/inventory 
// and load it into table

import Table from 'react-bootstrap/Table';

function HackerrankData() {
    return (
        
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>barcode</th>
                        <th>item</th>
                        <th>category</th>
                        <th>price</th>
                        <th>discount</th>
                        <th>available</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </Table>
        
    );
}

export default HackerrankData; 