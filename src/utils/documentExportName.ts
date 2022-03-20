import dayjsTime from '@utils/dayjsTime';

const documentExportName = (name: string = 'Document'): string => {
	return `${name}_report_generated_on_${dayjsTime().format(
		'YYYY-MM-DDTHH:mm:ss',
	)}`;
};

export default documentExportName;
