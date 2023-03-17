import React from 'react';
import MuiPagination, { PaginationProps } from '@mui/material/Pagination';

export interface IPagination extends PaginationProps {}

const Pagination: React.FC<IPagination> = ({ ...props }) => {
	return <MuiPagination {...props} />;
};

export default Pagination;
