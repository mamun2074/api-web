import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Accordion = () => {

    const columns = [
        {
            key: 'id',
            label: '#',
            _props: { scope: 'col' },
        },
        {
            key: 'class',
            _props: { scope: 'col' },
        },
        {
            key: 'heading_1',
            label: 'Heading',
            _props: { scope: 'col' },
        },
        {
            key: 'heading_2',
            label: 'Heading',
            _props: { scope: 'col' },
        },
    ]
    const items = [
        {
            id: 1,
            class: 'Mark',
            heading_1: 'Otto',
            heading_2: '@mdo',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 2,
            class: 'Jacob',
            heading_1: 'Thornton',
            heading_2: '@fat',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 3,
            class: 'Larry the Bird',
            heading_2: '@twitter',
            _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
        },
    ]


    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Accordion</strong> <small>Flush</small>
                    </CCardHeader>
                    <CCardBody>
                        <CTable columns={columns} items={items} />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Accordion
