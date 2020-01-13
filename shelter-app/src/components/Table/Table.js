import React, { useState, useEffect } from "react";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";

import {
  Paper,
  TableBox,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Code,
  KeyboardArrowDown,
  KeyboardArrowUp
} from "./Table.style";

const TableWrapper = ({
  headlines,
  data,
  intl,
  sortColumn = "index",
  sortDirection = "DESC"
}) => {
  const theme = useTheme();
  const [currentSortDirection, setCurrentSortDirection] = useState(
    sortDirection
  );
  const [currentSortColumn, setCurrentSortColumn] = useState(sortColumn);

  const orderBy = key => {
    if (currentSortDirection === "ASC") {
      return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    } else if (currentSortDirection === "DESC") {
      return function(a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }
  };

  const changeSortColumnAndDirection = column => {
    setCurrentSortColumn(column);

    setCurrentSortDirection(currentSortDirection === "ASC" ? "DESC" : "ASC");

    data.sort(orderBy(column));
  };

  useEffect(() => {
    data.sort(orderBy(currentSortColumn));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, currentSortColumn]);

  return (
    <Paper>
      <TableBox>
        <Table size="small">
          <TableHead>
            <TableRow>
              {headlines.map((head, index) => {
                return (
                  <TableCell
                    key={head.key}
                    sortable="true"
                    onClick={() => changeSortColumnAndDirection(head.key)}
                  >
                    {intl.formatMessage({ id: head.header })}
                    {head.sortable && currentSortColumn === head.key ? (
                      currentSortDirection === "DESC" ? (
                        <KeyboardArrowUp
                          className="material-icons"
                          theme={theme.palette}
                        />
                      ) : (
                        <KeyboardArrowDown
                          className="material-icons"
                          theme={theme.palette}
                        />
                      )
                    ) : head.sortable ? (
                      <Code className="material-icons" />
                    ) : (
                      undefined
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((verse, index) => {
              return (
                <TableRow key={verse.index}>
                  {headlines.map((column, key) => {
                    return (
                      <TableCell key={column.key}>
                        {verse[column.key]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableBox>
    </Paper>
  );
};

export default injectIntl(TableWrapper);
