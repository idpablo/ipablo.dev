interface WebVitalsModule {
  onCLS?: (metric: any) => void;
  onFCP?: (metric: any) => void;
  onLCP?: (metric: any) => void;
  onTTFB?: (metric: any) => void;
}

type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then((webVitals) => {
      const vitals = webVitals as unknown as WebVitalsModule;
      vitals.onCLS?.(onPerfEntry);
      vitals.onFCP?.(onPerfEntry);
      vitals.onLCP?.(onPerfEntry);
      vitals.onTTFB?.(onPerfEntry);
    });
  }
};

export default reportWebVitals;
