import * as React from 'react';

import {
    ExcelExport,
    ExcelExportColumn,
    ExcelExportColumnGroup
} from '@progress/kendo-react-excel-export';
import { aggregateBy, process } from '@progress/kendo-data-query';
import products from './products.json';
import LogoExel from '../icon/excel-Icon.svg'


const aggregates = [ { field: 'UnitPrice', aggregate: 'sum' } ];
const group = [ { field: 'Discontinued', aggregates: aggregates } ];
const data = process(products, {
    group: group
}).data;
const total = aggregateBy(products, aggregates);

const CustomGroupHeader = (props) => (`Discontinued: ${props.value}`);

const CustomGroupFooter = (props) => (`SUM: \$ ${(props.aggregates.UnitPrice.sum).toFixed(2)}`);

const CustomFooter = (props) =>
    (`Total ${props.column.title}: \$ ${total.UnitPrice.sum}`);

export default class Index extends React.Component {
    _exporter;
    export = () => {
        this._exporter.save();
    }
    render() {
        return (
            <React.Fragment>
                <img src={LogoExel} style={{height:33,width:33, cursor:"pointer"}} onClick={this.export}/>
                <ExcelExport
                    data={data}
                    group={group}
                    fileName="Products.xlsx"
                    ref={(exporter) => { this._exporter = exporter; }}
                >
                    <ExcelExportColumn field="ProductID" title="Product ID" locked={true} width={200} />
                    <ExcelExportColumn field="ProductName" title="Product Name" width={350} />
                    <ExcelExportColumnGroup title="Availability" headerCellOptions={{ textAlign: 'center' }}>
                        <ExcelExportColumn
                            field="UnitPrice"
                            title="Price"
                            cellOptions={{ format: '$#,##0.00' }}
                            width={150}
                            footerCellOptions={{ wrap: true, textAlign: 'center' }}
                            groupFooterCellOptions={{ textAlign: 'right' }}
                            groupFooter={CustomGroupFooter}
                            footer={CustomFooter}
                        />
                        <ExcelExportColumn field="UnitsOnOrder" title="Units on Order" />
                        <ExcelExportColumn field="UnitsInStock" title="Units in Stock" />
                    </ExcelExportColumnGroup>
                    <ExcelExportColumn
                        field="Discontinued"
                        title="Discontinued"
                        hidden={true}
                        groupHeader={CustomGroupHeader}
                    />
                </ExcelExport>
                </React.Fragment>
        );
    }
}