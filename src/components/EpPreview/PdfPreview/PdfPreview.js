import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import classes from './PdfPreview.module.css'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 0,
        padding: 0,
        flexGrow: 0,
        color: 'red',
    },
})

const PdfPreview = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={classes.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
)

export default PdfPreview
