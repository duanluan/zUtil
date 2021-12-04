package top.zhogjianhao;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.temporal.ChronoField;
import java.util.Date;
import java.util.Locale;

@Slf4j
@DisplayName("时间工具类测试")
public class DateUtilsTest {

  public static void main(String[] args) {
    // // System.out.println(DateTimeFormatter.ofPattern("uuuu-MM-dd HH:mm:ss").parse("2021-01-01 00:00:00"));
    // LocalDateTime now = LocalDateTime.now();
    // System.out.println(now.get(ChronoField.MILLI_OF_SECOND));
    // LocalDateTime now1 = now.with(ChronoField.MILLI_OF_SECOND, 1);
    // System.out.println(now.isAfter(now1));

    // now = now.atZone(ZoneOffset.ofHours(-1)).withFixedOffsetZone().toLocalDateTime();
    // System.out.println(ChronoLocalDateTime.timeLineOrder().compare(now, now1));
  }

  @DisplayName("探寻 ChronoField")
  @Test
  void testChronoField() {
    String indent = "\t\t\t\t\t\t\t\t\t\t\t\t\t";
    LocalDateTime now = LocalDateTime.now();
    // 时代：公元前，相当于当前时间的负数
    System.out.println(now.with(ChronoField.ERA, 0) + indent.replaceFirst("\t", "") + "时代：公元前");
    // 时代：公元，即当前时间
    System.out.println(now.with(ChronoField.ERA, 1) + indent + "时代：公元");
    // 公元前所属年：以当前时间为基础，年修改为公元前 2 年，结果 -0001-10-01T02:30:32.723 加上当前时间的月份往后 10-01T02:30:32.723 为 2 年
    System.out.println(now.with(ChronoField.ERA, 0).with(ChronoField.YEAR_OF_ERA, 2) + indent.replaceFirst("\t", "") + "公元前所属年");
    // 公元后所属年：以当前年月为基础，年修改为 2 年
    System.out.println(now.with(ChronoField.ERA, 1).with(ChronoField.YEAR_OF_ERA, 2) + indent + "公元后所属年");
    // 年
    System.out.println(now.with(ChronoField.YEAR, 2020) + indent + "年");
    // 预期月，从 0 年开始计算月（从 0 开始），2021 年 10 月的值为 2021 * 12 + 10 - 1
    System.out.println(now.with(ChronoField.PROLEPTIC_MONTH, 0) + indent + "预期月");
    // 年的月
    System.out.println(now.with(ChronoField.MONTH_OF_YEAR, 9) + indent + "年的月");
    // 年的对齐周：年的第一天为第一周的第一天
    System.out.println(now.with(ChronoField.ALIGNED_WEEK_OF_YEAR, 2) + indent + "年的对齐周");
    // 月的对齐周：月的第一天为此月第一周的第一天
    System.out.println(now.with(ChronoField.ALIGNED_WEEK_OF_MONTH, 2) + indent + "月的对齐周");
    // 年的对齐周的天
    System.out.println(now.with(ChronoField.ALIGNED_WEEK_OF_YEAR, 2).with(ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR, 5) + indent + "年的对齐周的天");
    // 月的对齐周的天
    System.out.println(now.with(ChronoField.ALIGNED_WEEK_OF_MONTH, 2).with(ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH, 5) + indent + "月的对齐周的天");
    // 年的天
    System.out.println(now.with(ChronoField.DAY_OF_YEAR, 1) + indent + "年的天");
    // 月的天
    System.out.println(now.with(ChronoField.DAY_OF_MONTH, 1) + indent + "月的天");
    // 周的天
    System.out.println(now.with(ChronoField.DAY_OF_WEEK, 1) + indent + "周的天");
    // 以 1970-01-01 为 0 开始的天（忽略偏移量和时区）
    System.out.println(now.with(ChronoField.EPOCH_DAY, 1) + indent + "以 1970-01-01 为 0 开始的天（忽略偏移量和时区）");
    // 上午（0-12）
    System.out.println(now.with(ChronoField.AMPM_OF_DAY, 0) + indent + "上午（0-12）");
    // 下午（13-23）
    System.out.println(now.with(ChronoField.AMPM_OF_DAY, 1) + indent + "下午（13-23）");
    // 上午或下午的小时，以当前 AMPM 为准，从 0 开始
    System.out.println(now.with(ChronoField.HOUR_OF_AMPM, 0) + indent + "上午或下午的小时");
    // 上午的小时
    System.out.println(now.with(ChronoField.AMPM_OF_DAY, 0).with(ChronoField.HOUR_OF_AMPM, 0) + indent + "上午的小时");
    // 下午的小时
    System.out.println(now.with(ChronoField.AMPM_OF_DAY, 1).with(ChronoField.HOUR_OF_AMPM, 0) + indent + "下午的小时");
    // 12 小时制，以当前 AMPM 为准，从 1 开始
    System.out.println(now.with(ChronoField.CLOCK_HOUR_OF_AMPM, 1) + indent + "12 小时制");
    // 上午的 12 小时制小时
    System.out.println(now.with(ChronoField.AMPM_OF_DAY, 0).with(ChronoField.CLOCK_HOUR_OF_AMPM, 1) + indent + "上午的 12 小时制小时");
    // 下午的 12 小时制小时
    System.out.println(now.with(ChronoField.AMPM_OF_DAY, 1).with(ChronoField.CLOCK_HOUR_OF_AMPM, 1) + indent + "下午的 12 小时制小时");
    // 天的小时
    System.out.println(now.with(ChronoField.HOUR_OF_DAY, 0) + indent + "天的小时");
    // 天的分钟
    System.out.println(now.with(ChronoField.MINUTE_OF_DAY, 1) + indent + "天的分钟");
    // 小时的分钟
    System.out.println(now.with(ChronoField.MINUTE_OF_HOUR, 1) + indent + "小时的分钟");
    // 天的秒
    System.out.println(now.with(ChronoField.SECOND_OF_DAY, 1) + indent + "天的秒");
    // 分钟的秒
    System.out.println(now.with(ChronoField.SECOND_OF_MINUTE, 1) + indent + "分钟的秒");
    // 以 1970-01-01T00:00Z (ISO) 为 0 开始的秒，必须和时区结合使用（+时区小时）
    System.out.println(now.atZone(ZoneId.systemDefault()).with(ChronoField.INSTANT_SECONDS, 1) + "\t\t以 1970-01-01T00:00Z (ISO) 为 0 开始的秒，必须和时区结合使用（+时区小时）");
    // 天的毫秒
    System.out.println(now.with(ChronoField.MILLI_OF_DAY, 1) + indent + "天的毫秒");
    // 秒的毫秒
    System.out.println(now.with(ChronoField.MILLI_OF_SECOND, 1) + indent + "秒的毫秒");
    // 天的微秒
    System.out.println(now.with(ChronoField.MICRO_OF_DAY, 1) + indent.replaceFirst("\t\t", "") + "天的微秒");
    // 秒的微秒
    System.out.println(now.with(ChronoField.MICRO_OF_SECOND, 1) + indent.replaceFirst("\t\t", "") + "秒的微秒");
    // 天的纳秒
    System.out.println(now.with(ChronoField.NANO_OF_DAY, 1) + indent.replaceFirst("\t\t\t", "") + "天的纳秒");
    // 秒的纳秒
    System.out.println(now.with(ChronoField.NANO_OF_SECOND, 1) + indent.replaceFirst("\t\t\t", "") + "秒的纳秒");
  }

  @DisplayName("探寻时区")
  @Test
  void atZone() {
    LocalDateTime now = LocalDateTime.now();
    // 无时区信息
    System.out.println(now);
    // 本地时区，atZone 只是给对象赋时区，并不会修改小时
    System.out.println(now.atZone(DateUtils.SYSTEM_ZONE_ID));
    // 指定时区
    System.out.println(now.atZone(ZoneOffset.ofHours(1)));

    now = now.withMonth(8);
    // 通过时区修改小时，本地时区和 UTC 时区相差多少就会加上多少，比如 Asia/Shanghai 和 UTC 相差 -8 小时
    System.out.println(now.atZone(DateUtils.SYSTEM_ZONE_ID).withZoneSameInstant(ZoneOffset.UTC));
    // FIXME 仅修改时区，其他保持不变，但会转换为此区域的有效时间（夏令时）
    System.out.println(now.atZone(DateUtils.SYSTEM_ZONE_ID).withZoneSameLocal(ZoneOffset.ofHours(-7)));
  }

  @DisplayName("getDefaultFormatter")
  @Test
  void getDefaultFormatter() {
    // 格式中不含年
    DateTimeFormatter dateTimeFormatter = new DateTimeFormatterBuilder().appendPattern(DateUtils.PATTERN_MM_DD).toFormatter();
    // 获取年报错：Unsupported field: Year
    try {
      dateTimeFormatter.parse("08-08").get(ChronoField.YEAR);
    } catch (Exception e) {
      log.warn(e.getMessage());
    }

    // 使用 getDefaultFormatter() 时会赋默认值
    dateTimeFormatter = DateUtils.getDefaultFormatter(DateUtils.PATTERN_MM_DD, Locale.ENGLISH, ZoneId.systemDefault());
    System.out.println(dateTimeFormatter.parse("08-08").get(ChronoField.YEAR));

    // 如果格式中已存在年，说明被转换的内容中已存在年，则不会赋默认值
    dateTimeFormatter = DateUtils.getDefaultFormatter(DateUtils.PATTERN_UUUU_MM_DD, Locale.ENGLISH, ZoneId.systemDefault());
    System.out.println(dateTimeFormatter.parse("2021-08-08").get(ChronoField.YEAR));
  }

  @DisplayName("format")
  @Test
  void format() {
    ZoneOffset zoneOffset = ZoneOffset.ofHours(-18);

    // ZonedDateTime
    ZonedDateTime nowZonedDateTime = ZonedDateTime.now();
    System.out.println(DateUtils.format(nowZonedDateTime, DateUtils.PATTERN_UUUU_MM_DD_HH_MM_SS, zoneOffset));
    System.out.println(DateUtils.format(nowZonedDateTime, DateUtils.PATTERN_UUUU_MM_DD_HH_MM_SS));
    System.out.println(DateUtils.format(nowZonedDateTime, zoneOffset));
    System.out.println(DateUtils.format(nowZonedDateTime));

    // LocalDateTime
    LocalDateTime nowLocalDateTime = LocalDateTime.now();
    System.out.println(DateUtils.format(nowLocalDateTime, DateUtils.PATTERN_UUUU_MM_DD_HH_MM_SS, zoneOffset));
    System.out.println(DateUtils.format(nowLocalDateTime, DateUtils.PATTERN_UUUU_MM_DD_HH_MM_SS));
    System.out.println(DateUtils.format(nowLocalDateTime, zoneOffset));
    System.out.println(DateUtils.format(nowLocalDateTime));

    // LocalDate
    LocalDate nowLocalDate = LocalDate.now();
    System.out.println(DateUtils.format(nowLocalDate, DateUtils.PATTERN_UUUU_MM_DD, zoneOffset));
    System.out.println(DateUtils.format(nowLocalDate, DateUtils.PATTERN_UUUU_MM_DD));
    System.out.println(DateUtils.format(nowLocalDate, zoneOffset));
    System.out.println(DateUtils.format(nowLocalDate));

    // LocalTime
    LocalTime nowLocalTime = LocalTime.now();
    System.out.println(DateUtils.format(nowLocalTime, DateUtils.PATTERN_HH_MM_SS, zoneOffset));
    System.out.println(DateUtils.format(nowLocalTime, DateUtils.PATTERN_HH_MM_SS));
    System.out.println(DateUtils.format(nowLocalTime, zoneOffset));
    System.out.println(DateUtils.format(nowLocalTime));

    // Date
    Date nowDate = new Date();
    System.out.println(DateUtils.format(nowDate, DateUtils.PATTERN_YYYY_MM_DD_HH_MM_SS, zoneOffset));
    System.out.println(DateUtils.format(nowDate, DateUtils.PATTERN_YYYY_MM_DD_HH_MM_SS));
    System.out.println(DateUtils.format(nowDate, zoneOffset));
    System.out.println(DateUtils.format(nowDate));
  }
}