import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

enum Gender {
  Male = "male",
  Female = "female"
}
enum UserType {
  User = "user",
  Businness = "businness"
}

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text",{nullable: false})
    name: string;

    @Column({ type: "varchar", length:200, unique: true , nullable: false})
    username: string;

    @Column({ type: "varchar",length:200, unique: true , nullable: false })
    email: string;

    @Column( "text")
    password: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column("enum", { enum: Gender , nullable: false })
    gender: Gender;

    @Column("enum", { enum: UserType  , nullable: false})
    userType: UserType;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({type: "timestamp"})
    createdDate: New Date();

}
