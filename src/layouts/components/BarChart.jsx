import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Chart from 'react-apexcharts';
import { Square3Stack3DIcon } from '@heroicons/react/24/outline';

export default function BarChart({ children, seriesName, totalSale }) {
  const chartConfig = {
    type: 'bar',
    height: 400,
    series: [
      {
        name: 'Sales',
        data: totalSale || [],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: '',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#D2001E'],
      plotOptions: {
        bar: {
          columnWidth: '40%',
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
        categories: seriesName || [],
      },
      yaxis: {
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: '#dddddd',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: -20,
          right: 15,
          left: 30,
          bottom: 50,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: 'dark',
      },
    },
  };

  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className='flex flex-col gap-4 rounded-none md:flex-row md:items-center h-[40px]'
      >
        <div>{children}</div>
      </CardHeader>
      <CardBody className='pt-0 px-2 pb-0'>
        <Chart className='' {...chartConfig} />
      </CardBody>
    </Card>
  );
}
