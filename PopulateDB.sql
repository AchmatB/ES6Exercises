/****** FIRST CREATE A DB CALLED HardwareStore ON YOUR MACHINE ******/

USE [HardwareStore]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ID] [int] NOT NULL,
	[Name] [varchar](255) NOT NULL,
	[Category] [varchar](50) NULL,
	[Subcategory] [varchar](50) NULL,
	[UnitPrice] [decimal](18, 0) NULL,
	[UnitsInStock] [int] NULL,
	[UnitsSold] [int] NULL,
	[ProfitYtd] [decimal](18, 0) NULL,
	[DateAdded] [datetime] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductSummary](
	[ID] [int] NOT NULL,
	[Category] [varchar](50) NOT NULL,
	[Subcategory] [varchar](50) NULL,
	[UnitsSold] [int] NULL,
 CONSTRAINT [PK_ProductSummary] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (1, N'Black And Decker 3/8" 5-amp Variable Speed Drill With Keyless Chuck, Dr260b', N'DIY', N'Electrical', CAST(208 AS Decimal(18, 0)), 7789, 1478, CAST(401217 AS Decimal(18, 0)), CAST(N'2014-01-13T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (2, N'Wagner 0283022c Ht775 Heat Gun', N'DIY', N'Electrical', CAST(344 AS Decimal(18, 0)), 3152, 9031, CAST(307930 AS Decimal(18, 0)), CAST(N'2014-10-22T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (3, N'Aaa 300psi Air Compressor', N'Woodworking', N'Pneumatic', CAST(962 AS Decimal(18, 0)), 3407, 1878, CAST(768371 AS Decimal(18, 0)), CAST(N'2015-10-21T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (4, N'Black & Decker Vs Jig Saw, Js515', N'DIY', N'Electrical', CAST(724 AS Decimal(18, 0)), 8668, 8206, CAST(501933 AS Decimal(18, 0)), CAST(N'2016-09-08T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (5, N'Hitachi 2 Hp 4-gal Compressor', N'Service Shop', N'Pneumatic', CAST(812 AS Decimal(18, 0)), 9952, 6074, CAST(637799 AS Decimal(18, 0)), CAST(N'2016-04-04T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (6, N'Black & Decker 18-volt Cordless Drill, Gco18c', N'DIY', N'Cordless', CAST(145 AS Decimal(18, 0)), 7799, 3583, CAST(442827 AS Decimal(18, 0)), CAST(N'2015-10-14T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (7, N'Fry Technologies Cookson Elect Am33955 95/5 Lead-free Solid Wire Solder', N'DIY', N'Electrical', CAST(553 AS Decimal(18, 0)), 3739, 4975, CAST(537323 AS Decimal(18, 0)), CAST(N'2015-05-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (8, N'Campbell Hausfeld 2-1/2 Finish Nailer (16 Gauge)', N'Construction', N'Mechanical', CAST(303 AS Decimal(18, 0)), 8412, 352, CAST(744138 AS Decimal(18, 0)), CAST(N'2015-04-22T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (9, N'Numax 21-degree 3-1/2" Framing Nailer', N'Framing', N'Electrical', CAST(815 AS Decimal(18, 0)), 5643, 995, CAST(967629 AS Decimal(18, 0)), CAST(N'2016-08-04T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (10, N'Bostitch 2.5 Gallon, 150 Psi Suitcase-style Air Compressor, Btfp01012', N'Framing', N'Pneumatic', CAST(724 AS Decimal(18, 0)), 9258, 115, CAST(988616 AS Decimal(18, 0)), CAST(N'2016-04-13T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (11, N'Primefit Garage Tire Inflator With 12" Hose', N'Service Shop', N'Electrical', CAST(555 AS Decimal(18, 0)), 6471, 2884, CAST(816488 AS Decimal(18, 0)), CAST(N'2015-11-17T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (12, N'Home Series 3 Pc Master Kit', N'DIY', N'Electrical', CAST(749 AS Decimal(18, 0)), 8591, 8753, CAST(841789 AS Decimal(18, 0)), CAST(N'2014-07-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (13, N'Ingersoll Rand 1/2 Air Impact Wrench 231ha', N'Service Shop', N'Electrical', CAST(917 AS Decimal(18, 0)), 3839, 1907, CAST(856957 AS Decimal(18, 0)), CAST(N'2016-10-02T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (14, N'Buffalo Tools Pro Series 12 Piece Router Bit Set', N'Woodworking', N'Accessories', CAST(861 AS Decimal(18, 0)), 495, 2119, CAST(482081 AS Decimal(18, 0)), CAST(N'2015-07-13T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (15, N'Hitachi 18 V Ni-cad Cordless Driver Drill', N'Construction', N'Cordless', CAST(798 AS Decimal(18, 0)), 8056, 2814, CAST(367250 AS Decimal(18, 0)), CAST(N'2014-10-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (16, N'Rockwell Shopseries 8 Amp Variable Speed Reciprocating Saw Kit', N'Woodworking', N'Mechanical', CAST(514 AS Decimal(18, 0)), 4903, 6563, CAST(9469 AS Decimal(18, 0)), CAST(N'2015-09-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (17, N'Lincoln Industrial Grease Gun Cordless With Case', N'Service Shop', N'Cordless', CAST(854 AS Decimal(18, 0)), 8356, 1014, CAST(181815 AS Decimal(18, 0)), CAST(N'2014-02-26T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (18, N'Contractors Tornado Double Blade Dual Saw', N'Construction', N'Electrical', CAST(725 AS Decimal(18, 0)), 5603, 2234, CAST(940612 AS Decimal(18, 0)), CAST(N'2016-08-19T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (19, N'Black & Decker Smart Select Linefinder Orbital Jigsaw, Js670v', N'Woodworking', N'Electrical', CAST(687 AS Decimal(18, 0)), 5581, 3770, CAST(353859 AS Decimal(18, 0)), CAST(N'2016-06-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (20, N'Powryte 1/2" Rocking Dog Air Impact Wrench, 100103a', N'Service Shop', N'Mechanical', CAST(635 AS Decimal(18, 0)), 4450, 1465, CAST(439686 AS Decimal(18, 0)), CAST(N'2016-07-29T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (21, N'Fry Technologies Cookson Elect Am32406 General Purpose Acid Core Solder', N'Service Shop', N'Electrical', CAST(66 AS Decimal(18, 0)), 3148, 8110, CAST(69502 AS Decimal(18, 0)), CAST(N'2016-02-29T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (22, N'Bostitch 18v Lithium Drill/impact Combo Kit And Bonus 25-piece Impact Set Bundle', N'DIY', N'Accessories', CAST(950 AS Decimal(18, 0)), 9941, 2411, CAST(564754 AS Decimal(18, 0)), CAST(N'2015-05-09T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (23, N'Superior Tool 2" Pvc Pipe Cutter', N'Plumbing', N'Electrical', CAST(664 AS Decimal(18, 0)), 4770, 1420, CAST(510127 AS Decimal(18, 0)), CAST(N'2016-01-02T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (24, N'Dremel Universal Multi-knife Blade, Mm430', N'DIY', N'Electrical', CAST(866 AS Decimal(18, 0)), 4172, 9328, CAST(542499 AS Decimal(18, 0)), CAST(N'2015-06-01T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (25, N'Bosch/rotozip/skil 2354-01 4-volt Lithium Ion Cordless Screwdriver', N'DIY', N'Cordless', CAST(704 AS Decimal(18, 0)), 4989, 2420, CAST(10033 AS Decimal(18, 0)), CAST(N'2016-05-14T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (26, N'Fein Asb 14 + Afmm 14 14.4v, 4ah, Cordless Fmm + Hammer Drill', N'DIY', N'Cordless', CAST(459 AS Decimal(18, 0)), 4029, 5608, CAST(899326 AS Decimal(18, 0)), CAST(N'2015-05-27T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (27, N'Hitachi 9" 6 Tpi Wood/nail Reciprocating Blade, 25pk', N'Construction', N'Electrical', CAST(77 AS Decimal(18, 0)), 7131, 389, CAST(96714 AS Decimal(18, 0)), CAST(N'2015-10-21T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (28, N'Bostitch Prozhoze, 1/4" X 100, Hopb14100', N'Service Shop', N'Electrical', CAST(872 AS Decimal(18, 0)), 169, 3813, CAST(196707 AS Decimal(18, 0)), CAST(N'2015-07-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (29, N'Arrow Fastener Powershot Heavy Duty Forward Action Stapler', N'Construction', N'Electrical', CAST(201 AS Decimal(18, 0)), 2697, 9116, CAST(842070 AS Decimal(18, 0)), CAST(N'2016-04-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (30, N'Campbell Hausfeld 17-piece Pneumatic Accessory Kit', N'Woodworking', N'Electrical', CAST(762 AS Decimal(18, 0)), 1065, 8500, CAST(123922 AS Decimal(18, 0)), CAST(N'2015-08-20T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (31, N'Black & Decker Matrix Combo Kit, 20v Drill And Trim Saw, Bdcdmt120ts', N'Woodworking', N'Electrical', CAST(765 AS Decimal(18, 0)), 6686, 9079, CAST(379814 AS Decimal(18, 0)), CAST(N'2014-05-04T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (32, N'Worx Semi Automatic Sd Driver, Wx254l', N'DIY', N'Electrical', CAST(410 AS Decimal(18, 0)), 8987, 2688, CAST(807279 AS Decimal(18, 0)), CAST(N'2017-06-25T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (33, N'Fein Asb 14 + Afmm 14 14.4v, 4ah, Cordless Fmm + Hammer Drill', N'DIY', N'Cordless', CAST(775 AS Decimal(18, 0)), 4598, 6854, CAST(470103 AS Decimal(18, 0)), CAST(N'2017-05-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (34, N'Campbell Hausfeld Air Compressor Oil - 16 Ounce', N'Service Shop', N'Pneumatic', CAST(798 AS Decimal(18, 0)), 358, 7207, CAST(387966 AS Decimal(18, 0)), CAST(N'2016-05-01T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (35, N'Makita Btl061 Lxt 18 Volt Angle Drill Kit', N'Construction', N'Electrical', CAST(973 AS Decimal(18, 0)), 9213, 4647, CAST(612498 AS Decimal(18, 0)), CAST(N'2017-05-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (36, N'Warp Brothers Fcp-12 Flex-o-glaze Cleaner And Polisher - 12 Oz.', N'Woodworking', N'Electrical', CAST(606 AS Decimal(18, 0)), 4408, 4096, CAST(211997 AS Decimal(18, 0)), CAST(N'2015-06-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (37, N'Black & Decker 1375w Heat Gun', N'Woodworking', N'Electrical', CAST(677 AS Decimal(18, 0)), 8403, 5218, CAST(416543 AS Decimal(18, 0)), CAST(N'2015-11-01T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (38, N'Warp Brothers Fcp-12 Flex-o-glaze Cleaner And Polisher - 12 Oz.', N'Woodworking', N'Electrical', CAST(520 AS Decimal(18, 0)), 1491, 529, CAST(361170 AS Decimal(18, 0)), CAST(N'2016-07-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (39, N'Acme Automotive Inline Adj Air Regulator', N'DIY', N'Electrical', CAST(363 AS Decimal(18, 0)), 9422, 8247, CAST(747871 AS Decimal(18, 0)), CAST(N'2016-12-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (40, N'Cherry Gel Pumice Hand Cleaner, Cherry, 1 Gal', N'DIY', N'Electrical', CAST(758 AS Decimal(18, 0)), 5800, 8497, CAST(728438 AS Decimal(18, 0)), CAST(N'2014-10-29T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (41, N'Freeman Pf3p6galck Freeman Ultimate Finishing Kit With 6 Gallon Compressor, 3 Nailers, Canvas Carry', N'Woodworking', N'Pneumatic', CAST(17 AS Decimal(18, 0)), 174, 3418, CAST(566472 AS Decimal(18, 0)), CAST(N'2016-03-09T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (42, N'Swisher 28 Ton 8.75 Gross Torque Log Splitter, Lsrb875281350', N'DIY', N'Electrical', CAST(776 AS Decimal(18, 0)), 6503, 7676, CAST(414630 AS Decimal(18, 0)), CAST(N'2016-05-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (43, N'Hitachi 12v Peak 2 Tool Li-ion Drill Combo Kit With Carrying Bag', N'Service Shop', N'Electrical', CAST(237 AS Decimal(18, 0)), 4010, 3164, CAST(365563 AS Decimal(18, 0)), CAST(N'2016-03-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (44, N'Stalwart 8-in-1 Multipurpose Lighted Magnetic Driver With Bits', N'DIY', N'Electrical', CAST(245 AS Decimal(18, 0)), 6595, 4560, CAST(887233 AS Decimal(18, 0)), CAST(N'2016-02-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (45, N'Buffalo Tools Pro Series Angle Grinding Kit', N'DIY', N'Electrical', CAST(456 AS Decimal(18, 0)), 1562, 4133, CAST(708642 AS Decimal(18, 0)), CAST(N'2015-02-09T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (46, N'Allied Tools 72-piece Rotary Tool Set', N'Construction', N'Accessories', CAST(254 AS Decimal(18, 0)), 9914, 9987, CAST(102559 AS Decimal(18, 0)), CAST(N'2015-01-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (47, N'Skil 10 Count U Shank Jigsaw Blade Set 94910', N'Framing', N'Accessories', CAST(303 AS Decimal(18, 0)), 1006, 947, CAST(541335 AS Decimal(18, 0)), CAST(N'2017-01-17T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (48, N'Black & Decker 18v Cordless Drill', N'Framing', N'Cordless', CAST(462 AS Decimal(18, 0)), 3925, 9714, CAST(641569 AS Decimal(18, 0)), CAST(N'2016-12-03T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (49, N'Porter Cable 1/2 18v Cordless Driver', N'Service Shop', N'Cordless', CAST(182 AS Decimal(18, 0)), 7004, 8844, CAST(729018 AS Decimal(18, 0)), CAST(N'2015-11-05T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (50, N'Black & Decker 5.2a 3.25" Planer Kit, 7698k', N'DIY', N'Electrical', CAST(443 AS Decimal(18, 0)), 8876, 8633, CAST(861328 AS Decimal(18, 0)), CAST(N'2014-07-27T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (51, N'Skil 2364-02 7.2-volt Lithium-ion 2-speed Drill/driver', N'Service Shop', N'Electrical', CAST(520 AS Decimal(18, 0)), 8351, 3164, CAST(641092 AS Decimal(18, 0)), CAST(N'2015-07-08T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (52, N'Ultra Steel 6v Cordless Drill', N'Woodworking', N'Cordless', CAST(932 AS Decimal(18, 0)), 2998, 8619, CAST(97904 AS Decimal(18, 0)), CAST(N'2016-03-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (53, N'Dremel Circle Cutter Attachment, 678-01', N'Construction', N'Electrical', CAST(839 AS Decimal(18, 0)), 5039, 3538, CAST(562217 AS Decimal(18, 0)), CAST(N'2017-03-27T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (54, N'Mr. Heater Stay A While Deluxe', N'Woodworking', N'Electrical', CAST(964 AS Decimal(18, 0)), 8276, 2795, CAST(95173 AS Decimal(18, 0)), CAST(N'2016-11-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (55, N'Black & Decker Matrix Oscillating Head Attachment, Bdcmto', N'Service Shop', N'Electrical', CAST(880 AS Decimal(18, 0)), 7138, 8894, CAST(268735 AS Decimal(18, 0)), CAST(N'2015-06-02T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (56, N'Diteq Gasket Core Drills Accessories', N'Construction', N'Electrical', CAST(943 AS Decimal(18, 0)), 2251, 5301, CAST(60052 AS Decimal(18, 0)), CAST(N'2014-08-29T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (57, N'Buffalo Tools Ps07499 24-piece Router Bit Set', N'Woodworking', N'Accessories', CAST(423 AS Decimal(18, 0)), 449, 6146, CAST(256276 AS Decimal(18, 0)), CAST(N'2014-02-03T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (58, N'Chicago Power Tools Power Drill Accessory Set, 75-piece', N'Service Shop', N'Accessories', CAST(701 AS Decimal(18, 0)), 8079, 5305, CAST(64196 AS Decimal(18, 0)), CAST(N'2017-08-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (59, N'Dremel Universal Multi-knife Blade, Mm430', N'Service Shop', N'Electrical', CAST(181 AS Decimal(18, 0)), 7434, 582, CAST(848874 AS Decimal(18, 0)), CAST(N'2016-02-14T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (60, N'Hitachi 3.25 Framing Nailers Nr83a2', N'DIY', N'Electrical', CAST(370 AS Decimal(18, 0)), 7835, 7175, CAST(929925 AS Decimal(18, 0)), CAST(N'2016-11-13T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (61, N'California Air Tools 4.6 Gallon Ultra Quiet And Oil-free 2.0 Hp Aluminum Twin Tank Air Compressor', N'Plumbing', N'Pneumatic', CAST(264 AS Decimal(18, 0)), 6377, 9583, CAST(756162 AS Decimal(18, 0)), CAST(N'2017-04-25T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (62, N'Blazer Products 189-2072 Clear Pocket Torch Pb207 Black', N'DIY', N'Electrical', CAST(522 AS Decimal(18, 0)), 2726, 5250, CAST(245758 AS Decimal(18, 0)), CAST(N'2015-07-18T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (63, N'10-count 10" Glue Sticks', N'DIY', N'Electrical', CAST(116 AS Decimal(18, 0)), 7126, 3349, CAST(575505 AS Decimal(18, 0)), CAST(N'2016-08-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (64, N'Ingersoll Rand Impact 1/2', N'DIY', N'Electrical', CAST(563 AS Decimal(18, 0)), 8500, 1721, CAST(757842 AS Decimal(18, 0)), CAST(N'2016-03-21T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (65, N'Lincoln Lubrication Ac2440 120-volt Corded Grease Gun', N'Construction', N'Electrical', CAST(629 AS Decimal(18, 0)), 8129, 6752, CAST(262004 AS Decimal(18, 0)), CAST(N'2014-05-22T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (66, N'Plews 05-025 4-inch Needle Nose Grease Gun Adapter', N'Service Shop', N'Electrical', CAST(627 AS Decimal(18, 0)), 4887, 9520, CAST(84542 AS Decimal(18, 0)), CAST(N'2014-11-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (67, N'Plews & Edelmann Lever-action Grease Gun, 6" Extension, 6, 000psi, 14oz Cartridge', N'Construction', N'Electrical', CAST(288 AS Decimal(18, 0)), 6713, 5411, CAST(705312 AS Decimal(18, 0)), CAST(N'2017-07-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (68, N'10-count 10" Glue Sticks', N'Woodworking', N'Electrical', CAST(459 AS Decimal(18, 0)), 4418, 9040, CAST(484563 AS Decimal(18, 0)), CAST(N'2014-06-21T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (69, N'Kawasaki 10 Piece Screw Extractor And Drill Bit Set', N'Woodworking', N'Accessories', CAST(586 AS Decimal(18, 0)), 2815, 6386, CAST(266106 AS Decimal(18, 0)), CAST(N'2014-05-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (70, N'Dremel Sanding/grinding Mini Accessory Kit, 686-02', N'DIY', N'Electrical', CAST(749 AS Decimal(18, 0)), 8374, 7812, CAST(300439 AS Decimal(18, 0)), CAST(N'2015-08-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (71, N'Vim Products 12mm Triple Square Bit', N'DIY', N'Electrical', CAST(911 AS Decimal(18, 0)), 5474, 9694, CAST(428343 AS Decimal(18, 0)), CAST(N'2016-04-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (72, N'Porter Cable-piece15cslk 7-1/4" 15-amp Circular Saw', N'Service Shop', N'Electrical', CAST(256 AS Decimal(18, 0)), 6014, 6036, CAST(669585 AS Decimal(18, 0)), CAST(N'2015-01-09T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (73, N'Apex Tool Group, Llc-tools 8125n Soldering Gun Tip', N'Construction', N'Electrical', CAST(81 AS Decimal(18, 0)), 1527, 1099, CAST(626271 AS Decimal(18, 0)), CAST(N'2015-07-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (74, N'Dremel Cleaning/polishing Mini Accessory Kit, 684-02', N'Woodworking', N'Electrical', CAST(737 AS Decimal(18, 0)), 7521, 8050, CAST(172485 AS Decimal(18, 0)), CAST(N'2017-02-02T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (75, N'Buffalo Tools Ps07499 24-piece Router Bit Set', N'Woodworking', N'Accessories', CAST(339 AS Decimal(18, 0)), 6945, 9269, CAST(794490 AS Decimal(18, 0)), CAST(N'2015-12-18T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (76, N'Buffalo Tools Ps07215 18-volt Cordless Drill Kit', N'Woodworking', N'Cordless', CAST(331 AS Decimal(18, 0)), 1346, 466, CAST(247613 AS Decimal(18, 0)), CAST(N'2017-09-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (77, N'Master Magnetics 7269 36-inch Retrieval Magnet', N'DIY', N'Electrical', CAST(456 AS Decimal(18, 0)), 3224, 1495, CAST(279248 AS Decimal(18, 0)), CAST(N'2014-12-03T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (78, N'Bostitch 26 Gallon, 150 Psi, 1.8hp Air Compressor , Btfp02028', N'DIY', N'Pneumatic', CAST(276 AS Decimal(18, 0)), 2832, 1754, CAST(465843 AS Decimal(18, 0)), CAST(N'2015-11-01T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (79, N'Bosch 5580-01 7-1/4" 13 Amp Skilsaw Circular Saw', N'Woodworking', N'Electrical', CAST(670 AS Decimal(18, 0)), 4137, 1740, CAST(427953 AS Decimal(18, 0)), CAST(N'2016-11-29T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (80, N'Stanley Tr45 Light Duty Staple Gun', N'DIY', N'Electrical', CAST(280 AS Decimal(18, 0)), 3094, 5606, CAST(105908 AS Decimal(18, 0)), CAST(N'2015-09-13T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (81, N'Black & Decker 2.4v Direct Plug Screwdriver, Dp240', N'Service Shop', N'Electrical', CAST(855 AS Decimal(18, 0)), 2006, 2723, CAST(450088 AS Decimal(18, 0)), CAST(N'2017-08-13T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (82, N'Bosch Pl1682 3-1/4" 6-amp Planer', N'DIY', N'Electrical', CAST(755 AS Decimal(18, 0)), 5206, 1307, CAST(920925 AS Decimal(18, 0)), CAST(N'2017-03-28T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (83, N'Skil 2364-02 7.2-volt Lithium-ion 2-speed Drill/driver', N'DIY', N'Electrical', CAST(108 AS Decimal(18, 0)), 7408, 184, CAST(8466 AS Decimal(18, 0)), CAST(N'2014-06-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (84, N'Bosch Pr20evsk Colt Variable Speed Palm Router Kit', N'Construction', N'Electrical', CAST(190 AS Decimal(18, 0)), 8725, 8765, CAST(526561 AS Decimal(18, 0)), CAST(N'2016-03-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (85, N'Legacy Manufacturing Leghfz3850yw2 Flexzilla 3/8in X 50yd Yellow Air Hose With 1/4 Inch Mnpt Ends', N'Framing', N'Electrical', CAST(179 AS Decimal(18, 0)), 1956, 2334, CAST(463856 AS Decimal(18, 0)), CAST(N'2015-01-25T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (86, N'Bosch 4100-09 10" 4.4 Hp Worksite Table Saw', N'Framing', N'Electrical', CAST(574 AS Decimal(18, 0)), 3541, 3654, CAST(471781 AS Decimal(18, 0)), CAST(N'2015-09-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (87, N'Professional Woodworker 18 Gauge Brad Nailer With 2-gallon 100 Psi Twin Stack Compressor Combo Kit', N'Service Shop', N'Pneumatic', CAST(771 AS Decimal(18, 0)), 446, 760, CAST(751241 AS Decimal(18, 0)), CAST(N'2015-06-20T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (88, N'Eclipse 900-250 Solder Aid Tool Set W/reverse Tweezers And Heat Sink', N'DIY', N'Accessories', CAST(565 AS Decimal(18, 0)), 9863, 9395, CAST(785836 AS Decimal(18, 0)), CAST(N'2014-01-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (89, N'Edsal Heavy-duty Workbench, Ub400', N'Service Shop', N'Electrical', CAST(568 AS Decimal(18, 0)), 6237, 809, CAST(513751 AS Decimal(18, 0)), CAST(N'2014-10-25T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (90, N'Dixon Valve Air Chief Industrial Quick Connect Fittings - Dc25 Septls238dc25', N'Woodworking', N'Electrical', CAST(335 AS Decimal(18, 0)), 3021, 7388, CAST(611705 AS Decimal(18, 0)), CAST(N'2014-05-19T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (91, N'Eclipse 900-206 Helping Hands With Solder Iron Holder - 2.5x', N'Construction', N'Electrical', CAST(162 AS Decimal(18, 0)), 2272, 9625, CAST(365726 AS Decimal(18, 0)), CAST(N'2015-10-31T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (92, N'Primefit 30-piece Air Compressor Accessory Kit', N'Woodworking', N'Pneumatic', CAST(524 AS Decimal(18, 0)), 9442, 5042, CAST(453610 AS Decimal(18, 0)), CAST(N'2015-06-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (93, N'Bosch Power Tools 29 Piece High Speed Steel Drill Set With Metal Case 96029', N'Service Shop', N'Accessories', CAST(636 AS Decimal(18, 0)), 9606, 8625, CAST(992113 AS Decimal(18, 0)), CAST(N'2016-03-31T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (94, N'Numax 16-gauge Straight Finish Nailer', N'Construction', N'Electrical', CAST(751 AS Decimal(18, 0)), 3894, 2743, CAST(575147 AS Decimal(18, 0)), CAST(N'2017-05-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (95, N'Skil 4570-01 18-volt Jigsaw', N'Woodworking', N'Electrical', CAST(490 AS Decimal(18, 0)), 5693, 4243, CAST(222301 AS Decimal(18, 0)), CAST(N'2016-04-08T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (96, N'Kawasaki 10 Piece Screw Extractor And Drill Bit Set', N'Service Shop', N'Accessories', CAST(154 AS Decimal(18, 0)), 7683, 5872, CAST(186077 AS Decimal(18, 0)), CAST(N'2014-01-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (97, N'Black & Decker 18v Cordless Drill Set, Gco18sfb', N'Service Shop', N'Cordless', CAST(839 AS Decimal(18, 0)), 6047, 6229, CAST(239639 AS Decimal(18, 0)), CAST(N'2016-10-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (98, N'Irwin 30-piece Drive Set, 1885554', N'DIY', N'Accessories', CAST(255 AS Decimal(18, 0)), 3041, 6473, CAST(252309 AS Decimal(18, 0)), CAST(N'2014-01-28T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (99, N'Lincoln Industrial Grease Gun Cordless With Case', N'Plumbing', N'Cordless', CAST(540 AS Decimal(18, 0)), 5149, 6740, CAST(709659 AS Decimal(18, 0)), CAST(N'2017-07-28T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Products] ([ID], [Name], [Category], [Subcategory], [UnitPrice], [UnitsInStock], [UnitsSold], [ProfitYtd], [DateAdded]) VALUES (100, N'Surebonder Mini Dual Temperature Glue Gun', N'DIY', N'Electrical', CAST(163 AS Decimal(18, 0)), 461, 1023, CAST(54901 AS Decimal(18, 0)), CAST(N'2016-01-18T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (1, N'Construction', N'Accessories', 9987)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (2, N'Construction', N'Cordless', 2814)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (3, N'Construction', N'Electrical', 59972)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (4, N'DIY', N'Accessories', 18279)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (5, N'DIY', N'Cordless', 18465)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (6, N'DIY', N'Electrical', 130821)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (7, N'DIY', N'Pneumatic', 1754)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (8, N'Framing', N'Accessories', 947)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (9, N'Framing', N'Cordless', 9714)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (10, N'Framing', N'Pneumatic', 115)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (11, N'Plumbing', N'Cordless', 6740)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (12, N'Plumbing', N'Electrical', 54679)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (13, N'Service Shop', N'Accessories', 19802)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (14, N'Service Shop', N'Cordless', 16087)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (15, N'Service Shop', N'Electrical', 8778)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (16, N'Service Shop', N'Pneumatic', 14041)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (17, N'Woodworking', N'Cordless', 38580)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (18, N'Woodworking', N'Electrical', 71011)
GO
INSERT [dbo].[ProductSummary] ([ID], [Category], [Subcategory], [UnitsSold]) VALUES (19, N'Woodworking', N'Pneumatic', 10338)
GO
