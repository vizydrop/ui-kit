import React from "react";

import { AddIcon } from "./AddIcon";
import { AnnotationsIcon } from "./AnnotationsIcon";
import { ArrowIcon } from "./ArrowIcon";
import { AskIcon } from "./AskIcon";
import { AxisIcon } from "./AxisIcon";
import { BackIcon } from "./BackIcon";
import { BooleanIcon } from "./BooleanIcon";
import { BrokenChartIcon } from "./BrokenChartIcon";
import { CalculationIcon } from "./CalculationIcon";
import { CaretIcon } from "./CaretIcon";
import { ChartAreaIcon } from "./ChartAreaIcon";
import { ChartBarIcon } from "./ChartBarIcon";
import { ChartFallbackIcon } from "./ChartFallbackIcon";
import { ChartLineIcon } from "./ChartLineIcon";
import { ChartScatterPlotIcon } from "./ChartScatterPlotIcon";
import { ChartStackedAreaIcon } from "./ChartStackedAreaIcon";
import { ChartStackedBarIcon } from "./ChartStackedBarIcon";
import { CheckedIcon } from "./CheckedIcon";
import { ClearIcon } from "./ClearIcon";
import { ClockIcon } from "./ClockIcon";
import { CloseBigIcon } from "./CloseBigIcon";
import { CloseIcon } from "./CloseIcon";
import { CompleteIcon } from "./CompleteIcon";
import { ConnectIcon } from "./ConnectIcon";
import { CopyIcon } from "./CopyIcon";
import { DataSourceIcon } from "./DataSourceIcon";
import { DataTableIcon } from "./DataTableIcon";
import { DatePickerIcon } from "./DatePickerIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EditIcon } from "./EditIcon";
import { ExpandIcon } from "./ExpandIcon";
import { FeedbackIcon } from "./FeedbackIcon";
import { FieldDateIcon } from "./FieldDateIcon";
import { FieldIdIcon } from "./FieldIdIcon";
import { FieldNumberIcon } from "./FieldNumberIcon";
import { FieldTextIcon } from "./FieldTextIcon";
import { FileUploadIcon } from "./FileUploadIcon";
import { FilterIcon } from "./FilterIcon";
import { FormatIcon } from "./FormatIcon";
import { FullScreenIcon } from "./FullScreenIcon";
import { GuideIcon } from "./GuideIcon";
import { HelpIcon } from "./HelpIcon";
import { LinkIcon } from "./LinkIcon";
import { LoadingIcon } from "./LoadingIcon";
import { LockIcon } from "./LockIcon";
import { LogoutIcon } from "./LogoutIcon";
import { MoreCardsIcon } from "./MoreCardsIcon";
import { MoveIcon } from "./MoveIcon";
import { NewWindowIcon } from "./NewWindowIcon";
import { NoDataIcon } from "./NoDataIcon";
import { OpenDetailIcon } from "./OpenDetailIcon";
import { ReloadIcon } from "./ReloadIcon";
import { SearchIcon } from "./SearchIcon";
import { SettingsIcon } from "./SettingsIcon";
import { ShowMoreIcon } from "./ShowMoreIcon";
import { SmallScreenIcon } from "./SmallScreenIcon";
import { SortIcon } from "./SortIcon";
import { TeamIcon } from "./TeamIcon";
import { UpgradeIcon } from "./UpgradeIcon";
import { WarningIcon } from "./WarningIcon";
import { LegendIcon } from "./LegendIcon";

import styles from "./Icons.stories.less";
import { PinnedIcon } from "./PinnedIcon";
import {MetricIcon} from "./MetricIcon";
import {PieChartIcon} from "./PieChartIcon";

export default {
  title: `Icons`
};

export const all = () => (
  <div className={styles.iconsList}>
    <div>
      <SettingsIcon />
      <span>SettingsIcon</span>
    </div>
    <div>
      <CalculationIcon />
      <span>CalculationIcon</span>
    </div>
    <div>
      <CloseIcon />
      <span>CloseIcon</span>
    </div>
    <div>
      <CloseBigIcon />
      <span>CloseBigIcon</span>
    </div>
    <div>
      <SearchIcon />
      <span>SearchIcon</span>
    </div>
    <div>
      <HelpIcon />
      <span>HelpIcon</span>
    </div>
    <div>
      <FilterIcon />
      <span>FilterIcon</span>
    </div>
    <div>
      <FormatIcon />
      <span>FormatIcon</span>
    </div>
    <div>
      <AddIcon />
      <span>AddIcon</span>
    </div>
    <div>
      <AnnotationsIcon />
      <span>AnnotationsIcon</span>
    </div>
    <div>
      <ArrowIcon direction="top" />
      <span>ArrowIcon direction=`top`</span>
    </div>
    <div>
      <ArrowIcon direction="bottom" />
      <span>ArrowIcon direction=`bottom`</span>
    </div>
    <div>
      <ArrowIcon direction="left" />
      <span>ArrowIcon direction=`left`</span>
    </div>
    <div>
      <ArrowIcon direction="right" />
      <span>ArrowIcon direction=`right`</span>
    </div>
    <div>
      <ShowMoreIcon />
      <span>ShowMoreIcon</span>
    </div>
    <div>
      <MoreCardsIcon />
      <span>MoreCardsIcon</span>
    </div>
    <div>
      <DataSourceIcon />
      <span>DataSourceIcon</span>
    </div>
    <div>
      <DeleteIcon />
      <span>DeleteIcon</span>
    </div>
    <div>
      <EditIcon />
      <span>EditIcon</span>
    </div>
    <div>
      <MoveIcon />
      <span>MoveIcon</span>
    </div>
    <div>
      <LinkIcon />
      <span>LinkIcon</span>
    </div>
    <div>
      <CopyIcon />
      <span>CopyIcon</span>
    </div>
    <div>
      <LockIcon />
      <span>LockIcon</span>
    </div>
    <div>
      <TeamIcon />
      <span>TeamIcon</span>
    </div>
    <div>
      <CheckedIcon />
      <span>CheckedIcon</span>
    </div>
    <div>
      <CaretIcon direction="top" />
      <span>CaretIcon direction=`top`</span>
    </div>
    <div>
      <CaretIcon direction="bottom" />
      <span>CaretIcon direction=`bottom`</span>
    </div>
    <div>
      <CaretIcon direction="left" />
      <span>CaretIcon direction=`left`</span>
    </div>
    <div>
      <CaretIcon direction="right" />
      <span>CaretIcon direction=`right`</span>
    </div>
    <div>
      <FileUploadIcon />
      <span>FileUploadIcon</span>
    </div>
    <div>
      <ExpandIcon />
      <span>ExpandIcon</span>
    </div>
    <div>
      <ReloadIcon />
      <span>ReloadIcon</span>
    </div>
    <div>
      <FeedbackIcon />
      <span>FeedbackIcon</span>
    </div>
    <div>
      <GuideIcon />
      <span>GuideIcon</span>
    </div>
    <div>
      <UpgradeIcon />
      <span>UpgradeIcon</span>
    </div>
    <div>
      <LogoutIcon />
      <span>LogoutIcon</span>
    </div>
    <div>
      <FieldIdIcon />
      <span>FieldIdIcon</span>
    </div>
    <div>
      <FieldTextIcon />
      <span>FieldTextIcon</span>
    </div>
    <div>
      <FieldNumberIcon />
      <span>FieldNumberIcon</span>
    </div>
    <div>
      <BooleanIcon />
      <span>BooleanIcon</span>
    </div>
    <div>
      <FieldDateIcon />
      <span>FieldDateIcon</span>
    </div>
    <div>
      <SortIcon direction="ascending" />
      <span>SortIcon direction=`ascending`</span>
    </div>
    <div>
      <SortIcon direction="descending" />
      <span>SortIcon direction=`descending`</span>
    </div>
    <div>
      <WarningIcon />
      <span>WarningIcon</span>
    </div>
    <div>
      <NewWindowIcon />
      <span>NewWindowIcon</span>
    </div>
    <div>
      <OpenDetailIcon />
      <span>OpenDetailIcon</span>
    </div>
    <div>
      <NoDataIcon />
      <span>NoDataIcon</span>
    </div>
    <div>
      <DatePickerIcon />
      <span>DatePickerIcon</span>
    </div>
    <div>
      <LoadingIcon />
      <span>LoadingIcon</span>
    </div>
    <div>
      <DataTableIcon />
      <span>DataTableIcon</span>
    </div>
    <div>
      <AxisIcon />
      <span>AxisIcon</span>
    </div>
    <div>
      <BackIcon />
      <span>BackIcon</span>
    </div>
    <div>
      <CompleteIcon />
      <span>CompleteIcon</span>
    </div>
    <div>
      <ConnectIcon />
      <span>ConnectIcon</span>
    </div>
    <div>
      <ClockIcon />
      <span>ClockIcon</span>
    </div>
    <div>
      <ClearIcon />
      <span>ClearIcon</span>
    </div>
    <div>
      <AskIcon />
      <span>AskIcon</span>
    </div>
    <div>
      <FullScreenIcon />
      <span>FullScreenIcon</span>
    </div>
    <div>
      <SmallScreenIcon />
      <span>SmallScreenIcon</span>
    </div>
    <div>
      <BrokenChartIcon />
      <span>BrokenChartIcon</span>
    </div>

    <div>
      <ChartAreaIcon />
      <span>ChartAreaIcon</span>
    </div>
    <div>
      <ChartBarIcon />
      <span>ChartBarIcon (Medium - Default)</span>
    </div>
    <div>
      <ChartBarIcon size="s" />
      <span>ChartBarIcon (Small)</span>
    </div>
    <div>
      <ChartFallbackIcon />
      <span>ChartFallbackIcon</span>
    </div>
    <div>
      <ChartLineIcon />
      <span>ChartLineIcon</span>
    </div>
    <div>
      <ChartScatterPlotIcon />
      <span>ChartScatterPlotIcon</span>
    </div>
    <div>
      <ChartStackedAreaIcon />
      <span>ChartStackedAreaIcon</span>
    </div>
    <div>
      <ChartStackedBarIcon />
      <span>ChartStackedBarIcon</span>
    </div>
    <div>
      <LegendIcon />
      <span>LegendIcon</span>
    </div>
    <div>
      <PinnedIcon />
      <span>PinnedIcon</span>
    </div>
    <div>
      <MetricIcon />
      <span>MetricIcon</span>
    </div>
    <div>
      <PieChartIcon />
      <span>PieChartIcon</span>
    </div>
  </div>
);
