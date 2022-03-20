export interface Tags {
	context: string;
	key: string;
}

export interface ManagementZones {
	id: string;
	name: string;
}

export interface Data {
	dimensions: Array<string>;
	dimensionMap: Record<string, string>;
	timestamps: Array<number>;
	values: Array<number>;
	peakValues?: Array<number> | number | null;
	hostDetails?: {
		tags: Array<Tags>;
		ipAddresses: Array<string>;
		managementZones: Array<ManagementZones>;
	};
}

export interface DataResult {
	data: Array<Data>;
}

export interface FetchedData {
	totalCount: string;
	resolution: string;
	result: Array<DataResult>;
}

export interface Props {
	fallbackData: FetchedData;
}
