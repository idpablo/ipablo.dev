type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitals) => {
      // Web Vitals v4 uses onCLS, onFCP, onLCP, onTTFB instead of getCLS, getFCP, etc.
      if ((webVitals as any).onCLS) {
        (webVitals as any).onCLS(onPerfEntry);
      }
      if ((webVitals as any).onFCP) {
        (webVitals as any).onFCP(onPerfEntry);
      }
      if ((webVitals as any).onLCP) {
        (webVitals as any).onLCP(onPerfEntry);
      }
      if ((webVitals as any).onTTFB) {
        (webVitals as any).onTTFB(onPerfEntry);
      }
    });
  }
};

export default reportWebVitals;
