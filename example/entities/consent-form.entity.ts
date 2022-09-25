// import {
//   Column,
//   CreateDateColumn,
//   DeleteDateColumn,
//   Entity,
//   Index,
//   JoinColumn,
//   ManyToOne,
//   OneToOne,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';
// import { ConsentGroupModel } from '@api/consent-group/entities/consent-group.entity';
// import { FileModel } from '@api/file/entities/file.entity';

// @Entity({ name: 'consent_forms' })
// export class ConsentFormModel {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ type: 'varchar', length: 255 })
//   name: string;

//   @Column({ type: 'float', precision: 10, scale: 2 })
//   version: number;

//   @Column({ type: 'boolean' })
//   isLatest: boolean;

//   @Column({ type: 'uuid', length: 36, nullable: true })
//   fileId: string;

//   @OneToOne(() => FileModel, {
//     createForeignKeyConstraints: false,
//   })
//   @JoinColumn()
//   file: FileModel;

//   @Column({ type: 'uuid', length: 36 })
//   @Index()
//   groupId: string;

//   @ManyToOne(() => ConsentGroupModel, (consentFormGroup) => consentFormGroup.forms, {
//     createForeignKeyConstraints: false,
//   })
//   group: ConsentGroupModel;

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;

//   @DeleteDateColumn()
//   deletedAt: Date;
// }
